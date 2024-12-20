import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Contactus.css";
import { Helmet } from "react-helmet";

const Contactus = () => {
  return (
    <div className="contactus-page">
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
        Contact
        <span style={{ color: "blue" }}> Us</span>
      </div>
      <div className="container-contact">
        <p style={{ fontWeight: "bold" }}>THE PUBLISHER</p>
        <p>
          Academic Development Forum (ADF) <br></br>Email:
          <a href="mailto:academicdevelopmentforum24@gmail.com">
            {" "}
            academicdevelopmentforum24@gmail.com
          </a>
        </p>
        <p style={{ fontWeight: "bold" }}>EDITOR-IN-CHIEF</p>
        <p>
          International Journal of English for Academic Excellence<br></br>
          Email:
          <a href="mailto:editor.ijeae@gmail.com"> editor.ijeae@gmail.com</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
