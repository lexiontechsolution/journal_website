import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./VolumesPage.css";
import { Helmet } from "react-helmet";

const VolumesPage = () => {
  const { year } = useParams();
  const [issuesData, setIssuesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVolumesAndIssues = async () => {
      try {
        const response = await fetch(
        `https://dev.dine360.ca/backend/publications/?year=${year}`
        );
        );

        if (!response.ok) {
          throw new Error("Failed to fetch volumes.");
        }

        const volumes = await response.json();
        console.log("Fetched volumes:", volumes);

        const issuePromises = volumes.map((volume) =>
          fetch(
            `https://dev.dine360.ca/backend/publications?year=${year}&volume=${volume}`
          ).then((res) => res.json())
        );

        const allIssues = await Promise.all(issuePromises);

        console.log("Fetched issue data (counts):", allIssues);

        const aggregatedIssues = {};
        allIssues.flat().forEach((issue) => {
          const key = `${issue.volume}-${issue.issue}-${issue.isSpecialIssue}`;
          if (!aggregatedIssues[key]) {
            aggregatedIssues[key] = {
              volume: issue.volume,
              issue: issue.issue,
              isSpecialIssue: issue.isSpecialIssue,
              count: 0,
            };
          }

          aggregatedIssues[key].count += 1;
        });

        const issuesArray = Object.values(aggregatedIssues);

        console.log("Aggregated issues data with counts:", issuesArray);

        setIssuesData(issuesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVolumesAndIssues();
  }, [year]);

  const handleClick = (volume, issue, isSpecial) => {
    console.log("Navigation clicked for: ", { year, volume, issue, isSpecial });

    if (isSpecial) {
      navigate(`/special-publications/${year}/${volume}/${issue}`);
    } else {
      navigate(`/publications/${year}/${volume}/${issue}`);
    }
  };

  return (
    <div className="volumes-page">
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
          <span style={{ color: "blue" }}>Volumes & Issues</span> for {year}
        </div>
        <div className="years-container">
          {issuesData.length > 0 ? (
            issuesData.map((issue, index) => (
              <div
                className={`year-box ${
                  issue.isSpecialIssue ? "special-box" : ""
                }`}
                key={`${issue.volume}-${issue.issue}`}
                onClick={() =>
                  handleClick(issue.volume, issue.issue, issue.isSpecialIssue)
                }
              >
                <div>
                  Volume {issue.volume} <br />
                  Issue {issue.issue}
                  <div className="count-box">({issue.count} Publications)</div>
                  {issue.isSpecialIssue && (
                    <div className="special-tag">Special Issue</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolumesPage;
