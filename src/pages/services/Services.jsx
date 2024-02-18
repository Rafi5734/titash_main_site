import React from "react";
import ServiceList from "./serviceList/ServiceList";

const Services = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Services</h1>
      <p className="text-center">
        Our agency always provides all the amazing tour services
      </p>
      <ServiceList />
    </div>
  );
};

export default Services;
