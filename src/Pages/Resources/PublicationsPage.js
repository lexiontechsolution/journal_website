import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PublicationsPage.css";
import { Helmet } from "react-helmet";

// ------------------------------------------------------------
// ONE source of truth for the backend root
// ------------------------------------------------------------
const API_ROOT = "https://dev.dine360.ca/backend/publications/publications";
const FILE_ROOT = "https://dev.dine360.ca/backend/publications"; // for view‑pdf

const PublicationsPage = () => {
  const { year, volume, issue } = useParams();          // URL params
  const [publications, setPublications] = useState([]); // state

  // ----------------------------------------------------------------
  // Fetch all publications that match year + volume (+ optional issue)
  // ----------------------------------------------------------------
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const params = new URLSearchParams({
          year,
          volume,                    // "1(1)" comes exactly as clicked
          issue                      // "1" from the URL
        });

        const res = await fetch(`${API_ROOT}?${params.toString()}`, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(
            `Failed to fetch publications – ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();
        setPublications(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching publications:", err);
          setPublications([]);
        }
      }
    };

    fetchData();
    return () => controller.abort(); // clean‑up
  }, [year, volume, issue]);

  // ----------------------------------------------------------------
  // Open PDF in a new tab
  // ----------------------------------------------------------------
  const openPdf = (id) =>
    window.open(`${FILE_ROOT}/view-pdf/${id}`, "_blank");

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
          <br />
          {year} / Volume&nbsp;{volume} / Issue&nbsp;{issue}
        </div>

        <div className="publications-container">
          {publications.length > 0 ? (
            publications.map((pub) => (
              <div key={pub._id} className="publication-box">
                <p>
                  <em>By: {pub.author}</em>
                  <br />
                  {pub.title}
                  <br />
                  <button
                    className="pdf-button"
                    onClick={() => openPdf(pub._id)}
                  >
                    Article&nbsp;PDF
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
