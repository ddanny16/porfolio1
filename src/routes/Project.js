import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
       <HeroImg2 heading="Projects" text="Some of my recent works" />
       <Work  />
       <PricingCard />
      <Footer />
    </div>
  ); 
};

export default Project;
