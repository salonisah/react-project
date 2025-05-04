import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = () => {
  return (
    <section className="service-cards" style= {{backgroundColor:' #f9f9f9' }}>
        <div className="container">
        <div className="card-container">
            <div className="card">
            <img src="/service-icons.png" alt="service icon" />
                    <h3>Business Strategy</h3>
                <p>Develop data-driven strategies to scale and optimize your business for long-term success.</p>
                <ul>
                    <li>Develop data-driven strategies</li>
                    <li>Optimize decision-making</li>
                    <li>Align business goals</li>
                    <li>Enhance operational efficiency</li>
                </ul>
            </div>
            <div className="card">
            <img src="/service-icons (1).png" alt="service icon" />
                <h3>Financial Advisory</h3>
                <p>Expert guidance on financial planning, investment strategies, and business growth.</p>
                <ul>
                    <li>Improve financial management</li>
                    <li>Optimize investment decisions</li>
                    <li>Mitigate financial risks</li>
                    <li>Increase profitability</li>
                </ul>
            </div>
            <div className="card">
            <img src="/service-icons (2).png" alt="service icon" />
                <h3>Digital Transformation</h3>
                <p>Leverage cutting-edge technology to drive innovation and efficiency in your business.</p>
                <ul>
                    <li>Implement smart automation</li>
                    <li>Optimize digital workflows</li>
                    <li>Enhance customer experiences</li>
                    <li>Ensure long-term scalability</li>
                </ul>
            </div>

            <div className="card">
                <img src="\service-icons (3).png" alt="service icon"/>.
                <h3>Market Research</h3>
                <p>Develop data-driven strategies to scale and optimize your business for long-term success.</p>
                <ul>
                    <li>Develop data-driven strategies</li>
                    <li>Optimize decision-making</li>
                    <li>Align business goals</li>
                    <li>Enhance operational efficiency</li>
                </ul>
            </div>
            <div className="card">
            <img src="/service-icons (4).png" alt="service icon" />
                <h3>Process Optimization</h3>
                <p>Expert guidance on financial planning, investment strategies, and business growth.</p>
                <ul>
                    <li>Improve financial management</li>
                    <li>Optimize investment decisions</li>
                    <li>Mitigate financial risks</li>
                    <li>Increase profitability</li>
                </ul>
            </div>
            <div className="card">
            <img src="/service-icons (5).png" alt="service icon" />
                <h3>Leadership Training</h3>
                <p>Leverage cutting-edge technology to drive innovation and efficiency in your business.</p>
                <ul>
                    <li>Implement smart automation</li>
                    <li>Optimize digital workflows</li>
                    <li>Enhance customer experiences</li>
                    <li>Ensure long-term scalability</li>
                </ul>
            </div>
        </div>
    </div>
    </section> 
  );
};

export default ServicesCard;