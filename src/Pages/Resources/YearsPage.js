import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // To handle navigation
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./YearsPage.css";
import { Helmet } from "react-helmet";

const YearsPage = () => {
  const [years, setYears] = useState([]);
  const navigate = useNavigate(); // Use to navigate to volumes page

  // Fetch years data from the backend
  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await fetch(
          "https://61.2.79.154:15002/years"
        );
        const data = await response.json();
        setYears(data); // Set the data into state
      } catch (error) {
        console.error("Error fetching years:", error);
      }
    };

    fetchYears();
  }, []);

  // Navigate to the volumes page for the selected year
  const handleYearClick = (year) => {
    navigate(`/volumes/${year}`); // Navigates to the volumes page for that year
  };

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
          <span style={{ color: "blue" }}>Publication </span>
          Archives
        </div>

        <div className="years-container">
          {years.length > 0 ? (
            years.map((year) => (
              <div
                key={year}
                className="year-box"
                onClick={() => handleYearClick(year)} // Trigger the navigation when clicked
              >
                {year}
              </div>
            ))
          ) : (
            <p>Loading years...</p> // Show loading message if data is not loaded
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YearsPage;
