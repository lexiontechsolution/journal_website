import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PublicationsPage.css";
import { Helmet } from "react-helmet";

const PublicationsPage = () => {
  const { year, volume, issue } = useParams();
  const [publications, setPublications] = useState([]);
  const [isSpecialIssue, setIsSpecialIssue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://eeman.in:15002/publications?year=${year}&volume=${volume}&issue=${issue}`
        );
        const data = await response.json();

        if (data.length > 0) {
          setIsSpecialIssue(data[0]?.isSpecialIssue || false);
          setPublications(data);
        }
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    };

    fetchData();
  }, [year, volume, issue]);

  const fetchPdf = (pdfId) => {
    const pdfUrl = `/view-pdf/${pdfId}`;
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
          <span style={{ color: "blue" }}>
            {isSpecialIssue ? "Special Issue Publications" : "Regular Issue Publications"}
          </span>
          <br />
          {year} / Volume {volume} / Issue {issue}
        </div>

        <div className="publications-container">
          {publications.length > 0 ? (
            publications.map((publication, index) => (
              <div key={publication._id || index} className="publication-box">
                <p>
                  <em>By: {publication.author}</em>
                  <br />
                  {publication.title}
                  <br />
                  {publication.doi ? (
                    <>
                      DOI:{" "}
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "blue" }}
                      >
                        {publication.doi}
                      </a>
                      <br />
                    </>
                  ) : (
                    <>
                      DOI: <span style={{ color: "gray" }}>Not available</span>
                      <br />
                    </>
                  )}
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
