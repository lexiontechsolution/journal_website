import React from "react";
import "./Aboutus.css"; // Import the CSS file
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import journalimage from "../../Assets/image.png";
const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1 className="about-title">
          About the <span style={{ color: "Blue" }}>Journal</span>
        </h1>
        <p className="about-text">
          The{" "}
          <strong>
            International Journal of English for Academic Excellence (IJEAE)
          </strong>{" "}
          is a bi-monthly peer-reviewed, open-access journal published by the
          Academic Development Forum (ADF), India. Launched in 2024, IJEAE
          serves as a premier platform for interdisciplinary scholarship,
          focusing exclusively on English literature and language.
        </p>

        <h2 className="about-subtitle">Aim</h2>
        <ul className="about-list">
          <li>
            Provide a scholarly platform for researchers, educators, and
            academicians.
          </li>
          <li>
            Encourage interdisciplinary approaches connecting English studies
            with linguistics, education, and cultural studies.
          </li>
          <li>Promote academic excellence with high peer-review standards.</li>
          <li>Ensure open-access dissemination of knowledge.</li>
          <li>
            Support emerging and established scholars with a fair peer-review
            process.
          </li>
        </ul>

        <h2 className="about-subtitle">Objectives</h2>
        <ul className="about-list">
          <li>Publish high-quality research in ELT and literature.</li>
          <li>Encourage discussions on trends, challenges, and innovations.</li>
          <li>Provide a platform for early-career researchers.</li>
          <li>
            Explore traditional, digital, and AI-assisted teaching methods.
          </li>
          <li>Ensure a rigorous peer-review process.</li>
          <li>Foster collaborations among scholars.</li>
          <li>Maintain a transparent, no-APC publishing model.</li>
          <li>Work towards indexing in reputed databases.</li>
        </ul>

        <h2 className="about-subtitle">Journal Particulars</h2>

        <div className="container-journal-pariculars">
          <table className="journal-table">
            <tbody>
              <tr>
                <td>Journal Title</td>
                <td>
                  International Journal of English for Academic Excellence
                </td>
              </tr>
              <tr>
                <td>Publisher</td>
                <td>Academic Development Forum (ADF)</td>
              </tr>
              <tr>
                <td>Publishing Format</td>
                <td>Online</td>
              </tr>
              <tr>
                <td>Editor-in-Chief</td>
                <td>Mr. Attrait Dovin Fedrick</td>
              </tr>
              <tr>
                <td>Starting Year</td>
                <td>2025</td>
              </tr>
              <tr>
                <td>Publishing Language</td>
                <td>English</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>English Literature and Language</td>
              </tr>
              <tr>
                <td>Frequency</td>
                <td>Bi-monthly</td>
              </tr>
              <tr>
                <td>E – ISSN (Online)</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td>editor.ijeae@gmail.com</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>
                  <a
                    href="https://www.ijeae.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.ijeae.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  2/2 A, West Street, South Amuthunnakkudi, Sathankulam (post),
                  Thoothukudi (District), Tamil Nadu - 628704
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
