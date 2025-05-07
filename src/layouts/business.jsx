import React from 'react';
import Button from '../components/Button';
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <> 
      <section 
        className="business">
        
        <div className="image-container">
            <img src="\images\business.png.png" alt="business" />
            <div className="overlay"></div>
        <div className="container">
            <div className="business-wrapper">
              <h4>UNLOCK GROWTH</h4>
              <h1>Ready to Take Your Business to the Next Level?</h1>
              <p>
                Unlock new growth opportunities with expert consulting, data-driven strategies, and tailored solutions. 
                Whether you're scaling up or optimizing operations, we’re here to help you succeed.
              </p>
              <Button
                 text="Let's talk strategy"
                 newcl="buttn-text mt-7"
                 path="/contactpage"
              />
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Business;
