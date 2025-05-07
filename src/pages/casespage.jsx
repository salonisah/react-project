import React from 'react';
import Banner from "../components/Banner";
import ProvenImpact from "../layouts/provenimpact"; 
import Caseitem from "../layouts/caseitem";
import Button from '../components/Button';

import Review from "../layouts/review";

const CasePage = () => {
  return (
    <>
      <Banner
        heading="Cases"
        item="cases"
        imageUrl="\images\about_us.jpg\Pexels Photo by fauxels.png"  // <-- FIXED
      />
      <ProvenImpact/>
      <Caseitem />
      <Review/>
      <section className="growth">
        <div className="container">
            <div className="cta-container">
                <h4>Unlock Growth</h4>
                <h1>Ready to Take Your Business to the <span>Next Level?</span></h1>
                <p>Unlock new growth opportunities with expert consulting, data-driven strategies, and tailored solutions. Whether you're scaling up or optimizing operations, we're here to help you succeed.</p>
                {/* <a href="#" className="cta-button mt-4">LET’S TALK STRATEGY →</a> */}
                <Button
                 text="Let's talk strategy"
                 newcl="cta-button mt-7"
                 path="/contactpage"
              />
            </div>
        </div>
    </section>
    </>
  );
};

export default CasePage;
