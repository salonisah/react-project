import React from 'react';

const Hero = () => {
  return (
    <>
<section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="box1">
              <h1>
                Smart <span className="highlight">Strategies</span><br />
                Ensuring Real Results
              </h1>
              <p className="since">Since <span>1994</span></p>
            </div>

            <div className="box2">
              <p className="description">
                Expert strategies, innovative solutions, and data-driven insights to help your
                business thrive in a competitive world.
              </p>

              <div className="stats">
                <div><span className="number">30+</span><br />Years of Experience</div>
                <div><span className="number">50+</span><br />Business Consultants</div>
                <div><span className="number">500+</span><br />Satisfied Clients</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img src="/Mask group.png" alt="Business Team" />
            <button className="play-button">▶</button>
          </div>
        </div>
      </section>
    </>
          );
};

export default Hero;