import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Journalmetrics.css";
import { Helmet } from "react-helmet";

const Journalmetrics = () => {
  return (
    <>
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

      <div className="heading-class">
        Journal
        <span style={{ color: "blue" }}> Metrics</span>
      </div>

      <div className="journal-container">
        <section className="journal-section">
          <h2 className="section-title">Publication Schedule</h2>
          <p>
            The International Journal of English for Academic Excellence (IJEAE)
            follows a bi-monthly publication schedule, with issues published
            online at the end of every even month (February, April, June,
            August, October, and December).
          </p>
          <p>
            Authors are encouraged to submit their manuscripts by the end of odd
            months (January, March, May, July, September, and November) to be
            considered for the next issue. For example, submissions received by
            the end of January will be considered for the February issue.
          </p>
          <p>
            Manuscripts submitted after the deadline may be considered for
            subsequent issues, but timely publication is not guaranteed.
          </p>
        </section>

        <section className="journal-section">
          <h2 className="section-title">Average Review Process Period</h2>
          <ul className="journal-list">
            <li>15 days avg. from submission to the first decision.</li>
            <li>60 days avg. from the first decision to acceptance.</li>
            <li>15 days avg. from acceptance to online publication.</li>
          </ul>
        </section>

        <section className="journal-section">
          <h2 className="section-title">Article Processing Charges</h2>
          <p>
            <strong>Important Note:</strong> The International Journal of
            English for Academic Excellence (IJEAE) is committed to making
            high-quality research accessible to a broad audience through open
            access. To support the costs of publishing, the following fees
            apply:
          </p>
          <ul className="journal-list">
            <li>
              <span style={{ fontWeight: "bold" }}>
                Article Submission Fee :
              </span>{" "}
              ₹0.00 (INR). <br></br>There is no fee for submitting an article to
              IJEAE.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Article Processing Fee (APC):
              </span>{" "}
              ₹1500 (INR)/ 30$. <br></br>Upon acceptance, an Article Processing
              Charge (APC) of ₹1500 will be required for Indian authors and 30$
              for foreign authors. This fee covers publication costs and ensures
              that your article remains freely available online.
            </li>
          </ul>
          <p>
            <strong>Payment Note:</strong>
            <br></br>IJEAE will never request APC payments to personal accounts.
            All APC payments should be made exclusively to the official account
            of the Academic Development Forum (Publisher). Account details will
            be provided only after the manuscript has been accepted for
            publication
          </p>
          <p>
            <strong>Copyright License 
:</strong>
            <br></br>All articles published in this journal are licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). This license allows others to share, copy, redistribute, adapt, and build upon the work for any purpose, even commercially, as long as proper attribution is given to the original author(s).
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Journalmetrics;
