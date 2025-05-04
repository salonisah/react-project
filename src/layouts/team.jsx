import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Instagram ,Linkedin} from 'lucide-react';

const Team = () => {
  return (
    <>
    
    <section className="team">
        <div className="container">
             <div className="team-container">
                <div className="team-text">
                    <h3>OUR TEAM</h3>
                    <h2>Meet the Experts Behind Your<span class="highlight"> success</span></h2>
                </div>
                <div className="team-content">
                    <p>From startups to enterprises, whether you need market research, financial consulting, or leadership
                        development, we offer customized services to optimize your business potential and ensure long-term
                        success.</p>
                    {/* <button className="services-button">VIEW ALL ↗</button> */}
                    <Link
              to="/teampage"
              className="services-button"
              data-title="View All"
            >View All ↗ </Link>
                </div>
                </div>
                <div className="profile-container">
                    <div className="profile">
                    <img src="/images/team/team (1).png"alt="mask"></img>
                    <div className="info">
                        <h3>Wilson Kuphal</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="overlay"></div>
                    <div class="social-icons">
                    <a href="#"><Facebook className="fab fa-facebook-f" /></a>
                    <a href="#"><Instagram className="fab fa-instagram" /></a>
                    <a href="#"><Linkedin className="fab fa-linkedin-in" /></a>
                    </div>
                </div>
                <div class="profile">
                    <img src="/images/team/team(2).png"alt="mask"></img>
                    <div class="info">
                        <h3>Juanita Mertz</h3>
                        <p>Chief Strategy Officer (CSO)</p>
                    </div>
                    <div class="overlay"></div>
                    <div class="social-icons">
                    <a href="#"><Facebook className="fab fa-facebook-f" /></a>
                    <a href="#"><Instagram className="fab fa-instagram" /></a>
                    <a href="#"><Linkedin className="fab fa-linkedin-in" /></a>
                    </div>
                </div>
                <div class="profile">
                    <img src="\images\team\team(3).png"alt="mask"></img>
            <div class="info">
                <h3>Vera Jast</h3>
                <p>Senior Business Consultant</p>
            </div>
            <div class="overlay"></div>
            <div class="social-icons">
            <a href="#"><Facebook className="fab fa-facebook-f" /></a>
                    <a href="#"><Instagram className="fab fa-instagram" /></a>
                    <a href="#"><Linkedin className="fab fa-linkedin-in" /></a>
            </div>
        </div>
    </div>
                
 </div>

 </section>
    </>
  );
};

export default Team;