import React from 'react';
import { Link } from "react-router-dom";
const CasesItem = () => {
  return (
    <>
<section className="cases-item">
        <div className="container">
            <div className="cases-item-container">
                <div className="case-item">
                    <div className="ar-5_4 img-container hvr-zoom">
                        <img src="/images/Mask group (6).png" alt="mask" class="img-fit smooth"></img>.
                    </div>

                    <div className="tags">
                        <span>Logistics</span>
                        <span>Cost Reduction</span>
                        <span>Technology</span>
                    </div>
                    <h3 className="mt-3">Reducing operational costs in a global supply chain</h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur. Arcu porttitor luctus ornare nisl pellentesque egestas
                        leo.</p>
                    {/* <a href="cases-single.jsx">READ FULL CASE STUDY →</a> */}
                    <Link to="/cases-single">READ FULL CASE STUDY →</Link>
                    
                </div>

                <div className="case-item">
                    <div class="ar-5_4 img-container">
                        <img src="\images\Mask group (7).png" alt="mask" class="img-fit"></img>
                    </div>

                    <div className="tags">
                        <span>Logistics</span>
                        <span>Cost Reduction</span>
                        <span>Technology</span>
                    </div>
                    <h3 className="mt-3">Reducing operational costs in a global supply chain</h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur. Arcu porttitor luctus ornare nisl pellentesque egestas
                        leo.</p>
                    {/* <a href="cases-single.jsx">READ FULL CASE STUDY →</a> */}
                    <Link to="/cases-single">READ FULL CASE STUDY →</Link>
                </div>
                <div className="case-item">
                    <div className="ar-5_4">
                        <img src="images\Mask group (8).png" alt="mask" class="img-fit"></img>
                    </div>

                    <div className="tags">
                        <span>Logistics</span>
                        <span>Cost Reduction</span>
                        <span>Technology</span>
                    </div>
                    <h3 className="mt-3">Reducing operational costs in a global supply chain</h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur. Arcu porttitor luctus ornare nisl pellentesque egestas
                        leo.</p>
                    {/* <a href="cases-single.jsx">READ FULL CASE STUDY →</a> */}
                    <Link to="/cases-single">READ FULL CASE STUDY →</Link>
                </div>
                <div className="case-item">
                    <div className="ar-5_4">
                        <img src="images\Mask group (9).png" alt="mask" class="img-fit"></img>
                    </div>

                    <div className="tags">
                        <span>Logistics</span>
                        <span>Cost Reduction</span>
                        <span>Technology</span>
                    </div>
                    <h3 className="mt-3">Reducing operational costs in a global supply chain</h3>
                    <p clasName="mt-3">Lorem ipsum dolor sit amet consectetur. Arcu porttitor luctus ornare nisl pellentesque egestas
                        leo.</p>
                    {/* <a href="cases-single.jsx">READ FULL CASE STUDY →</a> */}
                    <Link to="/cases-single">READ FULL CASE STUDY →</Link>
                </div>
            </div>
        </div>
    </section>
    </>  
  );
};

export default CasesItem;