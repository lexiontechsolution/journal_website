
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const key = `${year}-${volume}-${issue}`;
        const cached = sessionStorage.getItem(key);

        if (cached) {
          setPublications(JSON.parse(cached));
          setIsSpecialIssue(true);
        } else {
          const specialIssueResponse = await fetch(
            `https://publicationbackend.onrender.com/publications?year=${year}&volume=${volume}&issue=${issue}`
          );
          const specialIssueData = await specialIssueResponse.json();

          if (specialIssueData.length > 0) {
            setIsSpecialIssue(true);
            setPublications(specialIssueData);
            sessionStorage.setItem(key, JSON.stringify(specialIssueData));
          }
        }
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      } finally {
        setLoading(false);
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
    }
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>Publications</title>
      </Helmet>
      <div className="publications-container">
        {loading ? (
          <p>Loading data, please wait...</p>
        ) : (
          <>
            {publications.map((pub, index) => (
              <div key={index} className="publication-item">
                <h3>{pub.title}</h3>
                <p>{pub.author}</p>
                <button onClick={() => fetchPdf(pub._id)}>View PDF</button>
              </div>
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PublicationsPage;
