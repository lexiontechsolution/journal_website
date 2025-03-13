import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contactus");
  };

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
        <span style={{ color: "blue" }}>International </span>
        Journal of English for
        <br></br>
        Academic <span style={{ color: "blue" }}>Excellence</span>
      </div>

      <div className="heading-class-1">
        <h3>
          <span style={{ color: "blue" }}>IJEAE </span>encourages diverse forms
          of scholarly work
        </h3>
      </div>

      <div class="container">
        <div class="row">
          <div class="box">
            <h3>Research Articles</h3>
            <p>
              Comprehensive studies that present original research findings,
              offering new insights into English literature, language,
              linguistics and pedagogy.
            </p>
          </div>
          <div class="box">
            <h3>Review Articles</h3>
            <p>
              In-depth analyses of current developments, summarising recent
              scholarship and identifying emerging trends in English studies.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="box">
            <h3>Short Communications</h3>
            <p>
              Brief reports on significant research developments, innovative
              teaching practices, or preliminary findings that warrant immediate
              dissemination.
            </p>
          </div>
          <div class="box">
            <h3>Case Reports/Case Series</h3>
            <p>
              Detailed accounts of unique literary, linguistic, or pedagogical
              phenomena, contributing to a deeper understanding of complex
              issues.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="box fifth-box">
            <h3>Conference Proceedings</h3>
            <p>
              Selected papers from academic conferences, highlighting key
              advancements in English literature and language research.
            </p>
          </div>
        </div>
      </div>

      <div className="about-journal-1">
        By supporting a range of research types, IJEAE aims to bridge
        theoretical frameworks with practical applications, creating a dynamic
        space for knowledge sharing that enriches both academic and professional
        communities within the field of English studies.  
      </div>

      <div className="about-journal">
        <h3>About the Journal</h3>
        <div className="journal-info">
          The International Journal of English for Academic Excellence (IJEAE)
          is a bi-monthly peer-reviewed, open-access journal published by the
          Academic Development Forum (ADF), India. Launched in 2024, the IJEAE
          serves as a premier platform for interdisciplinary scholarship,
          focusing exclusively on English literature and language. The journal
          invites contributions from researchers and practitioners exploring
          diverse facets of these fields, fostering academic discourse and
          promoting innovation.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
