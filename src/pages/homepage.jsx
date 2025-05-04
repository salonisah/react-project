import React from 'react';
import Hero from '../layouts/hero';
import ClientLogos from '../layouts/client-logo';
import About from '../layouts/about';
import Services from '../layouts/services';
import ServicesCard from '../layouts/servicescard';
import Whychooseus from '../layouts/whychooseus';
import WorkProcess from '../layouts/workprocess';
import ProvenImpact  from '../layouts/provenimpact';
import CasesItem from '../layouts/caseitem';
import Business from '../layouts/business';
import Team from '../layouts/team'; 
import Review from '../layouts/review' ;
import Blogs from '../layouts/blogs';
function HomePage() {
  return (
   <>
    <Hero/>
      <ClientLogos/>
      <About/>
      <Services/> 
      <ServicesCard/> 
      <Whychooseus/> 
      <WorkProcess/>
      <ProvenImpact/>
      <CasesItem/>
      <Business/>
      <Team/>
      <Review/>
      <Blogs/>
      
   </>
  );
}

export default HomePage;
