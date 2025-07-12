import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./YearsPage.css";
import { Helmet } from "react-helmet";

// ------------------------------------------------------------
// ONE source of truth for the backend root
// ------------------------------------------------------------
const API_ROOT = "https://dev.dine360.ca/backend/publications";

const YearsPage = () => {
  const [years, setYears] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const fetchYears = async () => {
      try {
        const res = await fetch(`${API_ROOT}/years`, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(
            `Failed to fetch years – ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();
        setYears(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching years:", err);
          setYears([]);
        }
      }
    };

    fetchYears();
    return () => controller.abort(); // cleanup on unmount
  }, []);

  const handleYearClick = (year) => navigate(`/volumes/${year}`);

  return (
    <div className="years-page">
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
          <span style={{ color: "blue" }}>Publication&nbsp;</span>Archives
        </div>

        <div className="years-container">
          {years.length > 0 ? (
            years.map((year) => (
              <div
                key={year}
                className="year-box"
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            ))
          ) : (
            <p>Loading years…</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default YearsPage;
