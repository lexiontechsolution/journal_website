import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SpecialpublicationsPage.css";
import { Helmet } from "react-helmet";

const SpecialpublicationsPage = () => {
  const { year, volume, issue } = useParams();
  const [publications, setPublications] = useState([]);

  /* ────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!year || !volume || !issue) return;

    const fetchSpecialPublications = async () => {
      try {
        const encodedVolume = encodeURIComponent(volume);
        const encodedIssue  = encodeURIComponent(issue);

        const response = await fetch(
          `https://dev.dine360.ca/backend/publications/special-issues` +
          `?year=${year}&volume=${encodedVolume}&issue=${encodedIssue}`
        );

        if (!response.ok) {
          throw new Error(`Server responded ${response.status}`);
        }

        const data = await response.json();
        setPublications(data);
      } catch (err) {
        console.error("Error fetching special publications:", err);
        setPublications([]);               // keeps UI consistent
      }
    };

    fetchSpecialPublications();
  }, [year, volume, issue]);
  /* ────────────────────────────────────────────────────────────── */

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
            Special&nbsp;Issue&nbsp;Publications
          </span>
          <br />
          {year} / Volume&nbsp;{volume}
        </div>

        <div className="publications-container">
          {publications.length > 0 ? (
            publications.map((pub, idx) => (
              <div key={pub._id || idx} className="publication-box">
                <p>
                  {idx + 1}. {pub.title}
                  <a
                    href={pub.link || `/view-pdf/${pub._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "10px" }}
                  >
                    Get&nbsp;PDF
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
