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
            <button className="play-button" aria-label="Play video">
  <svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.963 9.83015C14.7656 9.71313 14.5408 9.65043 14.3114 9.64843C14.0819 9.64642 13.856 9.70518 13.6566 9.81874C13.4572 9.9323 13.2915 10.0966 13.1761 10.295C13.0608 10.4933 13 10.7187 13 10.9481V41.0518C13 41.2813 13.0608 41.5066 13.1761 41.705C13.2915 41.9034 13.4572 42.0677 13.6566 42.1812C13.856 42.2948 14.0819 42.3535 14.3114 42.3515C14.5408 42.3495 14.7656 42.2868 14.963 42.1698L40.3628 27.118C40.5568 27.0029 40.7175 26.8393 40.8291 26.6433C40.9408 26.4472 40.9994 26.2256 40.9994 26C40.9994 25.7744 40.9408 25.5527 40.8291 25.3567C40.7175 25.1607 40.5568 24.9971 40.3628 24.882L14.963 9.83015Z"
      fill="white"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>
          </div>
        </div>
      </section>
    </>
          );
};

export default Hero;