import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          {/* Visible only on large screens */}
          <div className="about-container">
            <div className="about-image-large">
              <div
                className="about-image  position-relative"
                style={{ justifyContent: "end", width: "100%" }}
              >
                <img
                  src="\images\about_us.jpg\Group 4 (1).png"
                  alt="Business Growth"
                  class="top-image"
                />
                <img
                  src="\images\about_us.jpg\Pexels Photo by Kampus Production (5).png"
                  alt="Business meeting"
                  class="bottom-image"
                />
              </div>
            </div>

            {/* Visible only on small screens */}
            <div className="about-image-small">
              <div
                className="about-image position-relative"
                style={{ justifyContent: "end", width: "100%" }}
              >
                <img
                  src="\images\about_us.jpg\Group 4 (1).png"
                  alt="Business Growth"
                  class="image-top"
                />
                <img
                  src="\images\about_us.jpg\Pexels Photo by Kampus Production (5).png"
                  alt="Business meeting"
                  class="image-bottom"
                />
              </div>
            </div>

            <div className="about-container">
              <div
                className="box3"
                style={{ padding: "76px 32px", fontSize: "larger", width: "100%" }}
              >
                <div className="about-content" style={{ width: "100%" }}>
                  <h3>ABOUT US</h3>
                  <h2>
                    Innovation That Powers{" "}
                    <span class="highlight">Your Growth</span>
                  </h2>
                  <p>
                    We provide smart strategies and actionable insights to help
                    businesses grow and thrive. Elementum quisque sit sit
                    ullamcorper viverra. Quam tristique at pellentesque
                    pellentesque eleifend accumsan diam justo.Eleifend mauris
                    quis ullamcorper integer nulla rhoncus consequat.
                    Sollicitudin morbi fusce ante ullamcorper ipsum id sit
                    tellus .
                  </p>
                  {/* <button class="btn-style-2" data-title="About Us"></button> */}
                  <Link
                    to="/about"
                    className="btn-style-2"
                    data-title="About Us"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="svg">
              <svg
                width="518"
                height="333"
                viewBox="0 0 518 333"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M518 333V0L279 333H518Z" fill="#00346B" />
                <path
                  d="M518 333H0L518 147.308V333Z"
                  fill="#621FA0"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
      </section>
    </>
  );
};

export default About;
