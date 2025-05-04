import React from 'react';

const Footer = () => {
  return (
    <>
     <footer className="footer">
        <div className="container">
        <div className="footer-content">
            <div className="footer-column">
              <h3>BrightPeak</h3>
                <p>Advisory LLC.</p>
            </div>
            <div className="footer-column">
                <h3>Contact Us</h3>
                <p>7407 Lansdowne Road, New Ansley 02176</p>
                <p>Call Us: (986) 692-5641</p>
                <p>Email Us: info@brightpeak.com</p>
            </div>
            <div className="footer-column">
                <h3>Quick Links</h3>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Cases</a>
                <a href="#">Blogs</a>
                <a href="#">FAQs</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="footer-column">
                <h3>Our Services</h3>
                <a href="#">Business Strategy</a>
                <a href="#">Financial Advisory</a>
                <a href="#">Digital Transformation</a>
                <a href="#">Market Research</a>
                <a href="#">Process Optimization</a>
                <a href="#">Leadership Training</a>
            </div>
            <div className="footer-column newsletter">
                <h3>Newsletter</h3>
                <p>Get the latest news and updates by signing into our newsletter.</p>
                <input type="email" placeholder="Email Address"/>
                <button>SUBSCRIBE</button>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Copyright©2025 BrightPeak. All rights reserved. <a href="#">Terms of Use</a> | <a href="#">Privacy
                    Policy</a></p>
        </div>
    </div>
    </footer>
     </>
    );
};

export default Footer;