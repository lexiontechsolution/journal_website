import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Announcement.css";
import { Helmet } from "react-helmet";

const Announcement = () => {
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

      <div className="container-announcement">
        <div className="heading-class">
          Announcement
          <span style={{ color: "blue" }}> Board</span>
        </div>
        <section className="announcement-section">
          <h2>
            <strong>I. </strong>Reduced Article Processing Fee
          </h2>
          <p>
            To encourage researchers to publish their work and celebrate the
            launch of the International Journal of English for Academic
            Excellence (IJEAE)
          </p>
          <ul className="announcement-list" style={{ listStyleType: "none" }}>
            <li>
              <strong>a. </strong>This introductory offer aims to foster
              academic contributions and provide an accessible platform for
              scholars to share their research.
            </li>
          </ul>
        </section>

        <section className="announcement-section">
          <h2>
            <strong>II. </strong>Call for Reviewers
          </h2>
          <p>
            <strong>a. </strong>The International Journal of English for
            Academic Excellence (IJEAE) invites scholars, researchers, and
            academics to join our team as reviewers. This voluntary role offers
            an opportunity to contribute expertise to the academic community and
            help maintain the journal's high standards in the fields of English
            literature and language.
          </p>
          <p>
            <strong>b. Requirements:</strong>
            <ul className="announcement-list">
              <li>
                Expertise in English literature, language studies, or related
                disciplines.
              </li>
              <li>
                Prior experience in academic publishing or peer reviewing
                (preferred but not mandatory).
              </li>
              <li>
                Commitment to providing detailed, timely, and constructive
                feedback.
              </li>
            </ul>
          </p>

          <p>
            <strong>c. </strong>
            If you are interested in becoming a reviewer, kindly complete the
            reviewer application form linked below and attach your most recent
            CV. The Editorial Board will assess your application and notify you
            of the outcome.
          </p>
          <p>
            <strong>d. Application Link:</strong>{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScq6vV_arpiy-sIs9-4A3i2_qHc6KF8OJGzrboU3owtHxWNaA/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reviewer Application Form
            </a>
          </p>
        </section>

        <footer className="announcement-footer">
          <p>
            If you have any further queries, please contact<br></br>
            <span style={{ fontWeight: "Bold" }}> Editor-in-chief</span>: Dr.
            Attrait Dovin Fedrick
            <br></br>
            <span style={{ fontWeight: "bold" }}>Email: </span>
            <a href="mailto:editor.ijeae@gmail.com">editor.ijeae@gmail.com</a>
            <p>
              Thank you for your cooperation, and stay tuned for the latest
              academic contributions each month!
            </p>
          </p>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Announcement;
