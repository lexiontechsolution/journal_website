import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Editorial.css";
import { Helmet } from "react-helmet";

const Editorial = () => {
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
        Editorial
        <span style={{ color: "blue" }}> Board</span>
      </div>

      <div className="editorial-content">
        <p>
          The International Journal of English for Academic Excellence (IJEAE)
          is supported by an esteemed Editorial Board dedicated to maintaining
          the journal’s high standards and academic integrity. The Editorial
          Team, along with the National and International Editorial Advisory
          Boards, brings together a wealth of knowledge and expertise across
          various disciplines, fostering a rigorous and comprehensive review
          process.
        </p>
        <h2>
          <span style={{ color: "blue" }}>Editorial </span>Team
        </h2>
        <div class="container-editorial">
          <div class="row-editorial">
            <div class="box-editorial">
              <h3>Editor-in-Chief</h3>
              <p style={{ textAlign: "center" }}>Mr. Attrait Dovin Fedrick</p>
            </div>
            <div class="box-editorial">
              <h3>Associate Editor</h3>
              <p>Dr. M. Richard Robert Raa</p>
            </div>
          </div>
        </div>
      </div>

      <h2>
        National <span style={{ color: "blue" }}>Editorial </span>Advisory
        <span style={{ color: "blue" }}> Board</span>
      </h2>
      <p>
        Our National Editorial Advisory Board comprises distinguished academics
        from premier institutions across India. They contribute insights and
        uphold the quality of scholarship within IJEAE.
      </p>

      <div class="container-editorial">
        <div class="row-editorial">
          <div class="box-editorial">
            <p>Dr. Joseph Mathew</p>
          </div>
          <div class="box-editorial">
            <p>Prof. Prasanth Arokia Samy D</p>
          </div>
        </div>
        <div class="row-editorial">
          <div class="box-editorial">
            <p>Prof. Caro Velma J</p>
          </div>
          <div class="box-editorial">
            <p>Dr. B. S. Gomathi</p>
          </div>
        </div>
        <div class="row-editorial">
          <div class="box fifth-box-edit">
            <p>Dr. Cynthiya Rose J S</p>
          </div>
        </div>
      </div>

      <h2>
        International <span style={{ color: "blue" }}>Editorial </span> Advisory{" "}
        <span style={{ color: "blue" }}>Board</span>
      </h2>
      <p>
        IJEAE is committed to a global perspective on research and scholarship.
        Our International Editorial Advisory Board includes respected scholars
        from around the world who bring diverse expertise to the journal,
        ensuring the relevance and impact of our published work across borders.
      </p>
      <div class="container-editorial">
        <div class="row-editorial">
          <div class="box-editorial">
            <p style={{ textAlign: "left" }}>Dr. Sreejith Ramachandran</p>
          </div>
          <div class="box-editorial">
            <p>Dr. Gamaya K P</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Editorial;
