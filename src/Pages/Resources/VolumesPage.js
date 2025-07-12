import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./VolumesPage.css";
import { Helmet } from "react-helmet";

// ✅ Set API root to match the actual working backend path
const API_ROOT = "https://dev.dine360.ca/backend/publications/publications";

const VolumesPage = () => {
  const { year } = useParams();
  const [issuesData, setIssuesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const fetchVolumesAndIssues = async () => {
      try {
        // Step 1: Fetch all volumes for the selected year
        const volumesRes = await fetch(
          `https://dev.dine360.ca/backend/publications/volumes?year=${year}`,
          { signal: controller.signal }
        );

        if (!volumesRes.ok) {
          throw new Error(
            `Failed to fetch volumes – ${volumesRes.status} ${volumesRes.statusText}`
          );
        }

        const volumes = await volumesRes.json();
        console.log("Fetched volumes:", volumes);

        // Step 2: Fetch issues for each volume
        const issuePromises = volumes.map(async (volume) => {
          const url = `${API_ROOT}?year=${year}&volume=${encodeURIComponent(volume)}`;

          const res = await fetch(url, { signal: controller.signal });

          if (!res.ok) {
            throw new Error(
              `Failed to fetch issues for volume ${volume} – ` +
              `${res.status} ${res.statusText}`
            );
          }

          return res.json();
        });

        const allIssues = await Promise.all(issuePromises);
        console.log("Fetched issue data:", allIssues);

        // Step 3: Aggregate issue data
        const aggregated = {};
        allIssues.flat().forEach((issue) => {
          const key = `${issue.volume}-${issue.issue}-${issue.isSpecialIssue}`;
          if (!aggregated[key]) {
            aggregated[key] = {
              volume: issue.volume,
              issue: issue.issue,
              isSpecialIssue: issue.isSpecialIssue,
              count: 0,
            };
          }
          aggregated[key].count += 1;
        });

        setIssuesData(Object.values(aggregated));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching data:", err);
          setIssuesData([]);
        }
      }
    };

    fetchVolumesAndIssues();
    return () => controller.abort(); // Cleanup on unmount
  }, [year]);

  const handleClick = (volume, issue, isSpecial) => {
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
          <span style={{ color: "blue" }}>Volumes&nbsp;&amp;&nbsp;Issues</span>{" "}
          for {year}
        </div>

        <div className="years-container">
          {issuesData.length > 0 ? (
            issuesData.map((issue) => (
              <div
                key={`${issue.volume}-${issue.issue}`}
                className={`year-box ${
                  issue.isSpecialIssue ? "special-box" : ""
                }`}
                onClick={() =>
                  handleClick(
                    issue.volume,
                    issue.issue,
                    issue.isSpecialIssue
                  )
                }
              >
                <div>
                  Volume {issue.volume}
                  <br />
                  Issue {issue.issue}
                  <div className="count-box">
                    ({issue.count}&nbsp;Publications)
                  </div>
                  {issue.isSpecialIssue && (
                    <div className="special-tag">Special&nbsp;Issue</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading…</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VolumesPage;
