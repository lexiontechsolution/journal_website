import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div className="contactus-page">
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
