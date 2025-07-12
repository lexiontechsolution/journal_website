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
        /* ─────────────────────────────────────────────────────
           1. Get all volumes for the selected year
           ──────────────────────────────────────────────────── */
        const volumesRes = await fetch(
          `https://dev.dine360.ca/backend/publications/volumes?year=${year}`
        );

        if (!volumesRes.ok) {
          throw new Error(
            `Failed to fetch volumes – ${volumesRes.status} ${volumesRes.statusText}`
          );
        }

        const volumes = await volumesRes.json();
        console.log("Fetched volumes:", volumes);

        /* ─────────────────────────────────────────────────────
           2. For each volume, fetch its issues in parallel
           ──────────────────────────────────────────────────── */
        const issuePromises = volumes.map(async (volume) => {
          const url = `https://dev.dine360.ca/backend/publications` +
                      `?year=${year}&volume=${encodeURIComponent(volume)}`;

          const res = await fetch(url);

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

        /* ─────────────────────────────────────────────────────
           3. Aggregate issues so we can show counts
           ──────────────────────────────────────────────────── */
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
        console.error("Error fetching data:", err);
        setIssuesData([]); // ensures UI falls back to “Loading…”
      }
    };

    fetchVolumesAndIssues();
  }, [year]);

  /* ─────────────────────────────────────────────────────────── */
  const handleClick = (volume, issue, isSpecial) => {
    if (isSpecial) {
      navigate(`/special-publications/${year}/${volume}/${issue}`);
    } else {
      navigate(`/publications/${year}/${volume}/${issue}`);
    }
  };
  /* ─────────────────────────────────────────────────────────── */

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
          <span style={{ color: "blue" }}>Volumes &amp; Issues</span> for {year}
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
                    ({issue.count} Publications)
                  </div>
                  {issue.isSpecialIssue && (
                    <div className="special-tag">Special Issue</div>
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
