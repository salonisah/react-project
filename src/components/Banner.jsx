import React from "react";

const Banner = ({ heading, imageUrl, item }) => {
  return (
    <>
      <section className="business margintop">
        <div className="image-container">
          <img src={imageUrl} alt="business" />
          <div class="overlay aboutoverlay"></div>
        </div>
        <div className="business-content aboutbusiness">
          <h1>{heading}</h1>
          <p>HOME &gt; {item}</p>
        </div>
      </section>
    </>
  );
};

export default Banner;
