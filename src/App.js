import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Contactus from "./Pages/Contactus/Contactus";
import Home from "./Pages/Home/Home";
import Announcement from "./Pages/Announcement/Announcement";
import Authorguide from "./Pages/Authorguide/Authorguide";
import Editorial from "./Pages/Editorial/Editorial";
import YearsPage from "./Pages/Resources/YearsPage";
import VolumesPage from "./Pages/Resources/VolumesPage";
import PublicationsPage from "./Pages/Resources/PublicationsPage";
import PDFViewer from "./Pages/Resources/PdfViewer";
import Plagarismpolicy from "./Pages/Authorguide/Plagarismpolicy";
import Journalmetrics from "./Pages/Authorguide/Journalmetrics";
import SpecialPublicationsPage from "./Pages/Resources/SpecialpublicationsPage";
import About from "./Pages/About us/Aboutus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/authorguide" element={<Authorguide />} />
      <Route path="/plagarism" element={<Plagarismpolicy />} />
      <Route path="/journalmetrics" element={<Journalmetrics />} />
      <Route path="/editorial" element={<Editorial />} />
      <Route path="/years" element={<YearsPage />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/volumes/:year" element={<VolumesPage />} />
      <Route
        path="/publications/:year/:volume/:issue"
        element={<PublicationsPage />}
      />
      <Route
        path="/special-publications/:year/:volume/:issue"
        element={<SpecialPublicationsPage />}
      />
      <Route path="/view-pdf/:id" element={<PDFViewer />} />
    </Routes>
  );
}

export default App;
