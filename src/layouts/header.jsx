import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className="img-contain" />
            </Link>
          </div>

          <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
            <button className="nav-close"onClick={closeMenu}>&times;</button>

            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/servicess"
                  className={location.pathname === "/servicess" ? "active" : ""}onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className={location.pathname === "/cases" ? "active" : ""}onClick={closeMenu}
                >
                  Cases
                </Link>
              </li>
              <li>
              <Link
                  to="/Blogs"
                  className={location.pathname === "/Blogs" ? "active" : ""}onClick={closeMenu}>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <Link to= "/contactpage" 
          className="cta-button transformed">
            Let's Talk <i className="fa fa-arrow-right smooth"></i>
          </Link>

          <button className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
