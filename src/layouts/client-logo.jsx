import React from 'react';
import { Link } from 'react-router-dom';

const ClientLogos = () => {
  return (
    <>
<section className="client-logos" style={{display:'none'}}>
      <div className="container">
        <div classname="logos-container owl-carousel owl-theme affi-carousel"  style={{ display:'flex' , gap:'70px'}} >
            <div className="item">
                <img src="\utube 1.png" alt="YouTube"></img>
            </div>
            <div className="item">
                <img src="\google 1.png" alt="google"></img>
            </div>
            <div className="item">
                <img src="\spotify 1.png" alt="spotify"></img>
            </div>
            <div className="item">
                <img src="\amazon 1.png" alt="amazon"></img>
            </div>
            <div className="item">
                <img src="\ms 1.png" alt="miscrosoft"></img>
            </div>
            <div className="item">
                <img src="\discord 1.png" alt="discord"></img>
            </div>
            <div className="item">
                <img src="\Vector.png" alt="walmart"></img>
            </div>
        </div>
        </div>
    </section>


</>
          );
};

export default ClientLogos;