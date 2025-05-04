import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className="img-contain" />
            </Link>
          </div>

          <div className="mobile-nav">
            <span className="nav-close">&times;</span>

            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/servicess"
                  className={location.pathname === "/servicess" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className={location.pathname === "/cases" ? "active" : ""}
                >
                  Cases
                </Link>
              </li>
              <li>
              <Link
                  to="/Blogs"
                  className={location.pathname === "/Blogs" ? "active" : ""}
                >
                  blogs
                </Link>
              </li>
            </ul>
          </div>

          <Link to= "/contactpage" 
          className="cta-button transformed">
            Let's Talk <i className="fa fa-arrow-right smooth"></i>
          </Link>

          <button className="hamburger">
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
