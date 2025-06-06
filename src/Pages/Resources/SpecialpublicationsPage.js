import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SpecialpublicationsPage.css";
import { Helmet } from "react-helmet";

const SpecialpublicationsPage = () => {
  const { year, volume, issue } = useParams();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchSpecialPublications = async () => {
      try {
        const response = await fetch(
          `https://eeman.in:15002/special-issues?year=${year}&volume=${volume}&issue=${issue}`
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
        <p><strong>{index + 1}. {publication.title}</strong></p>
        <p><strong>Author:</strong> {publication.author}</p>
        <p><strong>DOI:</strong> 
          <a href={publication.doi} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px" }}>
            {publication.doi}
          </a>
        </p>
        <p>
          <a
            href={publication.link || publication.pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3498db", textDecoration: "underline" }}
          >
            View PDF
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
