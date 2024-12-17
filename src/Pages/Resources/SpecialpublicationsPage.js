import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SpecialpublicationsPage.css";

const SpecialpublicationsPage = () => {
  const { year, volume, issue } = useParams();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchSpecialPublications = async () => {
      try {
        const response = await fetch(
          `https://publication-backend-klr9.onrender.com/special-issues?year=${year}&volume=${volume}&issue=${issue}`
        );
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error("Error fetching special publications:", error);
      }
    };

    if (year && volume && issue) {
      fetchSpecialPublications();
    }
  }, [year, volume, issue]);

  return (
    <div className="special-publications-page">
      <Header />
      <div className="content">
        <div className="heading-class">
          <span style={{ color: "white", backgroundColor: "#f39c12" }}>
            Special Issue Publications
          </span>
          <br></br>
          {year}/ Volume {volume}
        </div>

        <div className="publications-container">
          {publications.length > 0 ? (
            publications.map((publication, index) => (
              <div key={publication.id || index} className="publication-box">
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
            <p>No publications found for this special issue.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpecialpublicationsPage;
