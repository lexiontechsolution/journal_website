import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PublicationsPage.css";
import { Helmet } from "react-helmet";

const API_PUBS = "https://dev.dine360.ca/backend/publications/publications";
const API_FILES = "https://dev.dine360.ca/backend/publications"; // for view-pdf

const PublicationsPage = () => {
  const { year, volume, issue } = useParams();
  const [publications, setPublications] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!year || !volume || !issue) {
      setError("Missing required parameters: year, volume, or issue.");
      setPublications([]);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const qs = new URLSearchParams({
          year,
          volume,
          issue, // now always required
        });

        const res = await fetch(`${API_PUBS}?${qs.toString()}`, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(
            `Fetch failed – ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();
        setPublications(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching publications:", err);
          setError("Failed to load publications.");
          setPublications([]);
        }
      }
    };

    fetchData();
    return () => controller.abort();
  }, [year, volume, issue]);

  const openPdf = (id) =>
    window.open(`${API_FILES}/view-pdf/${id}`, "_blank");

  return (
    <div className="publications-page">
      <Helmet>
        <title>International Journal of English for Academic Excellence</title>
      </Helmet>

      <Header />

      <div className="content">
        <div className="heading-class">
          <span style={{ color: "blue" }}>Regular Issue Publications</span>
          <br />
          {year} / Volume {volume} / Issue {issue}
        </div>

        <div className="publications-container">
          {error ? (
            <p className="error-text">{error}</p>
          ) : publications.length > 0 ? (
            publications.map((pub) => (
              <div key={pub._id} className="publication-box">
                <p>
                  <em>By: {pub.author}</em>
                  <br />
                  {pub.title}
                  <br />
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer">
  {pub.doi}
</a>

                  <button
                    className="pdf-button"
                    onClick={() => openPdf(pub._id)}
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
