import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PublicationsPage.css";

const PublicationsPage = () => {
  const { year, volume, issue } = useParams();
  const [publications, setPublications] = useState([]);
  const [isSpecialIssue, setIsSpecialIssue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const specialIssueResponse = await fetch(
          `https://publication-backend-klr9.onrender.com/publications?year=${year}&volume=${volume}&issue=${issue}`
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

  return (
    <div className="publications-page">
      <Header />
      <div className="content">
        <div className="heading-class">
          <span style={{ color: "blue" }}>Regular Issue Publications</span>
          <br></br> {year}/ Volume {volume}
        </div>

        <div className="publications-container">
          {publications.length > 0 ? (
            publications.map((publication, index) => (
              <div key={publication._id || index} className="publication-box">
                <p>
                  {index + 1}. {publication.title}
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "10px" }}
                  >
                    Get PDF
                  </a>
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
