import React from "react";
import Banner from "../components/Banner";
import Services from "../layouts/services";
import Servicescard from "../layouts/servicescard";
import Business from "../layouts/business";
import Workprocess from "../layouts/workprocess";
const ServicePage = () => {
  return (
    <>
      <Banner
        heading="Services"
        item="Our Services"
        imageUrl="\images\about_us.jpg\Pexels Photo by fauxels.png"
      />
      <Services/>
      <Servicescard/>
      <Business />
      <Workprocess/>
    </>
  );
};

export default ServicePage;
