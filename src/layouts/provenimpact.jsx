import React from 'react';
import { Link } from 'react-router-dom';
<Link to="/cases">
  <button className="services-button">VIEW ALL ↗</button>
</Link>
const ProvenImpact = () => {
  return (
    <section className="proven-impact"> 
      <div className="container">
        <div className="proven-impact-container">
          <div className="proven-impact-text">
            <h3>OUR CASES</h3>
            <h2>Proven Impact Across <span className="highlight">Industries</span></h2>
          </div>
          <div className="proven-impact-content">
            <p>
              From startups to enterprises, whether you need market research, financial consulting, or leadership
              development, we offer customized services to optimize your business potential and ensure long-term success.
            </p>
            {/* <button className="services-button">VIEW ALL ↗</button> */}
            <Link
                          to="/cases"
                          className="services-button"
                          data-title="View All"
                        >View All ↗ </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenImpact;