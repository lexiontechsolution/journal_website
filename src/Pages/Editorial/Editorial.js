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
          <span style={{ color: "blue" }}>Editorial </span>Members
        </h2>
        <div class="container-editorial">
          <div class="row-editorial">
            <div class="box-editorial">
              <h3>Editor-in-Chief</h3>
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Mr. Attrait Dovin Fedrick
                </span>
                <br></br>
                Chairman<br></br>Academic Development Forum<br></br>2/2 A West
                Street, South Amuthunnakudi, Sathankulam (post),Thoothukudi,
                Tamil Nadu – 628 704, India.
                  <br></br>
                <a href="mailto:academicdevelopmentforum24@gmail.com"> Email</a>
              </p>
            </div>
            <div class="box-editorial">
              <h3>Associate Editor</h3>
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Dr. M Richard Robert Raa
                </span>
                <br></br>
                Chairman<br></br>Academic Development Forum<br></br>2/2 A West
                Street, South Amuthunnakudi, Sathankulam (post),Thoothukudi,
                Tamil Nadu – 628 704, India.<br></br>
                <a href="mailto:nascdrrichard@nehrucolleges.com"> Email</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="editorial-content">
        <h2>
          National <span style={{ color: "blue" }}>Editorial </span>Advisory
          <span style={{ color: "blue" }}> Board</span>
        </h2>
        <p>
          Our National Editorial Advisory Board comprises distinguished
          academics from premier institutions across India. They contribute
          insights and uphold the quality of scholarship within IJEAE.
        </p>

        <div class="container-editorial">
          <div class="row-editorial">
            <div class="box-editorial">
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Dr. Joseph Mathew
                </span>
                <br></br>Assistant Professor of English, <br></br>Nehru Arts and
                Science College, Coimbatore, Tamil Nadu – 641 105, India.<br></br>
                <a href="mailto:nascjospehmathew@nehrucolleges.com"> Email</a>
              </p>
            </div>
            <div class="box-editorial">
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Prof. Prasanth Arokia Samy D
                </span>
                <br></br>Assistant Professor of English, <br></br>St. Joseph's
                College, Tiruchirappalli, Tamil Nadu - 620002, India.<br></br>
                <a href="mailto:prasantharokiasamy_en2@mail.sjctni.edu"> Email</a>
              </p>
            </div>
          </div>
          <div class="row-editorial">
            <div class="box-editorial">
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Prof. Caro Velma J
                </span>
                <br></br>Assistant Professor of English, <br></br>Holy Cross
                College, Tiruchirappalli, Tamil Nadu – 620 002, India.
              </p>
            </div>
            <div class="box-editorial">
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Dr. B. S. Gomathi
                </span>
                <br></br>Associate Professor of English, <br></br>Velalar
                College of Engineering and Technology, Thindal, Erode, Tamil
                Nadu -638 012, India<br></br>
                <a href="mailto:gomathibs@velalar.engg.ac.in"> Email</a>
              </p>
            </div>
          </div>
          <div class="row-editorial">
            <div class="box fifth-box-edit">
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Dr. Cynthiya Rose J S
                </span>
                <br></br>Freelance and Language trainer, Chennai, Tamil Nadu,
                India.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="editorial-content">
        <h2>
          International <span style={{ color: "blue" }}>Editorial </span>{" "}
          Advisory <span style={{ color: "blue" }}>Board</span>
        </h2>
        <p>
          IJEAE is committed to a global perspective on research and
          scholarship. Our International Editorial Advisory Board includes
          respected scholars from around the world who bring diverse expertise
          to the journal, ensuring the relevance and impact of our published
          work across borders.
        </p>
        <div class="container-editorial">
          <div class="row-editorial">
            <div class="box-editorial">
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Dr. Sreejith Ramachandran
                </span>
                <br></br>Associate Professor and Head,<br></br> Department of
                English at Acharya University, Karakul, Uzbekistan<br></br>
                <a href="mailto:sreejith11@acharya.ac.uz"> Email</a>
              </p>
            </div>
            <div class="box-editorial">
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
                  Dr. Gamaya K P
                </span>
                <br></br>Senior Assistant Professor, <br></br>Department of
                English at Acharya University, Karakul, Uzbekistan.<br></br>
                <a href="mailto:gamaya10@acharya.ac.uz"> Email</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Editorial;
