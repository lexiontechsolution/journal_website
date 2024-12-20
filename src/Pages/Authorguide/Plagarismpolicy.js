import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Plagarismpolicy.css";
import { Helmet } from "react-helmet";

const Plagarismpolicy = () => {
  return (
    <>
      <Helmet>
        <title>IJEAE</title>
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
        Plagarism
        <span style={{ color: "blue" }}> Policy</span>
      </div>
      <div className="policy-intro">
        <p>
          Following the University Grants Commission (UGC) Regulations on
          Minimum Qualifications for Appointment of Teachers and Other Academic
          Staff in Universities and Colleges and Measures for the Maintenance of
          Standards in Higher Education, 2018, The International Journal of
          English for Academic Excellence (IJEAE) adheres to strict plagiarism
          guidelines to ensure the integrity of academic publications. Our
          plagiarism policy follows the guidelines of the UGC’s Promotion of
          Academic Integrity and Prevention of Plagiarism in Higher Educational
          Institutions Regulations, 2018.
        </p>
      </div>
      <div className="policy-container">
        <h3>Key Features of the IJEAE Plagiarism Policy</h3>
        <div className="policy-features">
          <div className="feature-box">
            <h2>Definition of Plagiarism</h2>
            <p>
              Plagiarism is defined as using another person's work, ideas, or
              expressions without appropriate credit or acknowledgment, and
              presenting it as one’s own. This includes all forms of academic
              publications, such as research articles, books, theses, and
              dissertations.
            </p>
          </div>

          <div className="feature-box">
            <h2>Similarity Index</h2>
            <p>
              All submitted manuscripts should be checked for similarity using
              reputable plagiarism detection software. The similarity index
              should be included in the manuscript and adhere to the limits
              specified below.
            </p>
          </div>

          <div className="feature-box">
            <h2>Consequences of Plagiarism</h2>
            <p>
              If plagiarism is detected, the manuscript will be rejected, and
              authors will be notified of the decision. In cases of confirmed
              plagiarism, authors may be prohibited from submitting future
              manuscripts to IJEAE.
            </p>
          </div>

          <div className="feature-box">
            <h2>Ethical Considerations</h2>
            <p>
              IJEAE upholds the ethical standards outlined by the UGC to prevent
              academic misconduct. All cases of academic dishonesty, including
              plagiarism, will be addressed according to these standards to
              ensure fair and ethical publishing practices.
            </p>
          </div>

          <div className="feature-box">
            <h2>Self-Plagiarism</h2>
            <p>
              Authors should submit only original manuscripts. Submissions
              previously published in full or in part are not allowed, and
              manuscripts must not be under review by another journal.
            </p>
          </div>

          <div className="feature-box">
            <h2>Acceptable Level of Similarity</h2>
            <ul>
              <li>
                For research articles, the acceptable similarity index is up to
                10%.
              </li>
              <li>
                For review articles and other publication types, a similarity
                index of up to 15% is permissible.
              </li>
              <li>
                It is recommended to review the complete UGC Plagiarism Policy
                for any updates.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plagarismpolicy;
