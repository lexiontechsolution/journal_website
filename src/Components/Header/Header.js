import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./../../Assets/logo.svg";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isGuidelinesDropdownOpen, setIsGuidelinesDropdownOpen] =
    useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleGuidelinesDropdown = () => {
    setIsGuidelinesDropdownOpen(!isGuidelinesDropdownOpen);
    setIsAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsGuidelinesDropdownOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="Journal Website Logo"
          className="logo"
          onClick={() => navigate("/")} // Navigates to the homepage
        />
        <div className={`nav-container ${isNavOpen ? "active" : ""}`}>
          <nav className="nav">
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
            <Link
              className={`dropdown-wrapper ${
                location.pathname === "/authorguide" ||
                location.pathname === "/plagarism" ||
                location.pathname === "/journalmetrics" ||
                location.pathname === "/authorguide"
                  ? "active-link"
                  : ""
              }`}
              onClick={toggleGuidelinesDropdown}
            >
              Guidelines
              {isGuidelinesDropdownOpen ? (
                <FaChevronUp className="dropdown-icon" />
              ) : (
                <FaChevronDown className="dropdown-icon" />
              )}
              {isGuidelinesDropdownOpen && (
                <div className="dropdown">
                  <Link to="/authorguide">Author Guide</Link>
                  <Link to="/plagarism">Plagarism policy</Link>
                  <Link to="/journalmetrics">Journal metrics</Link>
                </div>
              )}
            </Link>
            <Link
              to="/years"
              className={location.pathname === "/years" ? "active-link" : ""}
            >
              Resources
            </Link>
            <Link
              className={`dropdown-wrapper ${
                location.pathname === "/about the journal" ||
                location.pathname === "/contactus" ||
                location.pathname === "/editorial" ||
                location.pathname === "/announcement"
                  ? "active-link"
                  : ""
              }`}
              onClick={toggleAboutDropdown}
            >
              About
              {isAboutDropdownOpen ? (
                <FaChevronUp className="dropdown-icon" />
              ) : (
                <FaChevronDown className="dropdown-icon" />
              )}
              {isAboutDropdownOpen && (
                <div className="dropdown">
                  <Link to="/aboutus">About us</Link>
                  <Link to="/announcement">Announcement</Link>
                  <Link to="/editorial">Editorial Board</Link>
                  <Link to="/contactus">Contact us</Link>
                </div>
              )}
            </Link>
          </nav>
        </div>
        <div className="hamburger-menu" onClick={toggleNav}>
          {isNavOpen ? (
            <FaTimes className="hamburger-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
