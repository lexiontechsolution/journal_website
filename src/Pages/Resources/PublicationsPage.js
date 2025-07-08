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
      const encodedVolume = encodeURIComponent(volume);
      const encodedIssue = encodeURIComponent(issue);

      const response = await fetch(
        `https://dev.dine360.ca/backend/publications/?year=${year}&volume=${encodedVolume}&issue=${encodedIssue}`
      );

      if (response.ok) {
        const data = await response.json();
        setPublications(data);
      } else {
        console.error("Failed to fetch publications: ", response.status);
        setPublications([]);
      }
    } catch (error) {
      console.error("Error fetching data from backend:", error);
      setPublications([]);
    }
  };

  fetchData();
}, [year, volume, issue]);


 const fetchPdf = (pdfId) => {
    // Construct the relative URL for the PDF
    const pdfUrl = `/view-pdf/${pdfId}`;
  
    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
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
