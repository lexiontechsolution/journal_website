import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PublicationsPage.css";
import { Helmet } from "react-helmet";
import axios from "axios";

const PublicationsPage = () => {
  const { year, volume, issue } = useParams();
  const [publications, setPublications] = useState([]);
  const [isSpecialIssue, setIsSpecialIssue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const specialIssueResponse = await fetch(
          `http://61.2.79.154:15002//publications?year=${year}&volume=${volume}&issue=${issue}`
        );

        const specialIssueData = await specialIssueResponse.json();

        if (specialIssueData.length > 0) {
          setIsSpecialIssue(true);
          setPublications(specialIssueData);
        }
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    };

    fetchData();
  }, [year, volume, issue]);

  const fetchPdf = async (pdfId) => {
    try {
      const response = await axios.get(
        `https://publicationbackend-1.onrender.com/view-pdf/${pdfId}`,
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank");
    } catch (error) {
      console.error("Error fetching PDF:", error);
      alert("Failed to load PDF.");
    }
  };

  return (
    <div className="publications-page">
      <Helmet>
        <title>International Journal of English for Academic Excellence</title>
        <meta
          name="description"
          content="IJEAE is the International Journal of English for Academic Research, offering a platform for high-quality research in English studies."
        />
        <meta
          name="keywords"
          content="International Journal, English for Academic Research, IJEAE"
        />
      </Helmet>
      <Header />
      <div className="content">
        <div className="heading-class">
          <span style={{ color: "blue" }}>Regular Issue Publications</span>
          <br /> {year}/ Volume {volume}
        </div>

        <div className="publications-container">
          {publications.length > 0 ? (
            publications.map((publication, index) => (
              <div key={publication._id || index} className="publication-box">
                <p>
                  <em>By: {publication.author}</em>
                  <br />
                  {publication.title}
                  <br></br>
                  <button
                    className="pdf-button"
                    onClick={() => fetchPdf(publication._id)}
                  >
                    Article PDF
                  </button>
                </p>
              </div>
            ))
          ) : (
            <p>No publications found for this issue.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PublicationsPage;
