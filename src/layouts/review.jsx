import React from "react";

const Review = () => {
  return (
    <>
      <section className="review">
        <div className="container">
        <div className="testimonial">
          <div className="review-container">
            <div className="review-text">
              <h3 >TESTIMONIALS</h3>
              <h2>
                What People<span className="highlight"> Says</span> About us
              </h2>
            </div>
            <div className="review-content">
              <p>
                From startups to enterprises, whether you need market research,
                financial consulting, or leadership development, we offer
                customized services to optimize your business potential and
                ensure long-term success.
              </p>
            </div>
          </div>
          <div
            className="testimonial-slider owl-theme owl-carousel"
            id="testimonial-slider"
          >
            <div className="itemreview">
              <div className="testimonial-card">
                <div className="gradient-corner"></div>
                <img
                  src="\images\review\Mask group (10).png"
                  alt="profile-image"
                  className="profile-pic"
                />
                <div className="h3p">
                  <h3>Darin Hessel</h3>
                  <p>Lead Officer, AZ Company</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  atque ea debitis cumque quas rem laudantium illum autem culpa,
                  aliquid expedita sed adipisci magni!{" "}
                </p>
                </div>
              </div>
            </div>
            <div className="itemreview">
              <div className="testimonial-card">
                <div className="gradient-corner"></div>
                <img
                  src="\images\review\Mask group (12).png"
                  alt="profile-image"
                  className="profile-pic"
                />
                <div className="h3p">
                  <h3>Darin Hessel</h3>
                  <p>Lead Officer, AZ Company</p>
                
                <div className="revp">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis atque ea debitis cumque quas rem laudantium illum autem
                    culpa, aliquid expedita sed adipisci magni!{" "}
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemreview">
              <div className="testimonial-card">
                <div className="gradient-corner"></div>
                <img
                  src="\images\review\Mask group (13).png"
                  alt="profile-image"
                  className="profile-pic"
                />
                <div className="h3p">
                  <h3>Darin Hessel</h3>
                  <p>Lead Officer, AZ Company</p>
                
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  atque ea debitis cumque quas rem laudantium illum autem culpa,
                  aliquid expedita sed adipisci magni!{" "}
                </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
