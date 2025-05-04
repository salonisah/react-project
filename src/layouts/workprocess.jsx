import React from 'react';

const WorkProcess = () => {
  return (
    <section className="work-process">
        <div className="container">
        <div className="work-process-container">
            <div className="work-process-text">
                <h3>OUR WORK PROCESS</h3>
                <h2>Insights into <span className="highlight">Impact</span></h2>
            </div>
            <div className="work-process-content">
                <p>From startups to enterprises, whether you need market research, financial consulting, or leadership
                    development, we offer customized services to optimize your business potential and ensure long-term
                    success.</p>
            </div>
        </div>
        <div className="process-steps">
            <div className="step">
                <img src="\images\Frame 6 (4).png" alt="Research"/>
                <div className='descr'>
                <h3>Client Consultation & Research</h3>
                <p>Understand client goals and business structure.</p>
                </div>
            </div>
            <div className="step">
                <img src="\images\Frame 6 (4).png" alt="Analysis"/>
                <div className='descr'>
                <h3>Data Collection & Analysis</h3>
                <p>Conduct market research and financial reviews.</p>
                </div>
            </div>
            <div className="step">
                <img src="\images\Frame 6 (4).png" alt="Strategy"/>
                <div className='descr'>
                <h3>Strategy Development</h3>
                <p>Formulate business strategies or operational improvements.</p>
                </div>
            </div>
            <div className="step">
                <img src="\images\Frame 6 (4).png" alt="Execution"/>
                <div className='descr'>
                <h3>Implementation & Execution</h3>
                <p>Work alongside client teams to implement solutions.</p>
              </div>  
            </div>
            <div className="step">
                <img src="\images\Frame 6 (4).png" alt="Reporting"/>
                <div className='descr'>
                <h3>Monitoring & Reporting</h3>
                <p>Measure progress and provide recommendations.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
);
};

export default WorkProcess;