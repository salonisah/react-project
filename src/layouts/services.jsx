import React from "react";
import {} from "react-router-dom";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-container">
          <div className="services-text">
            <h6>OUR SERVICES</h6>
            <h2>
              Strategic <span class="highlight">Services</span> to Drive Growth
            </h2>
          </div>
          <div className="services-content">
            <p>
              From startups to enterprises, whether you need market research,
              financial consulting, or leadership development, we offer
              customized services to optimize your business potential and ensure
              long-term success.
            </p>
            
            {/* <Link
              to="/servicess"
              className="services-button mt-7"
              data-title="View All"
            >View All ↗ </Link> */}

            <Link to= "/servicess" 
                     className="services-button mt-7 transformed">
                       View All <i className="fa fa-arrow-right smooth"></i>
                     </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
