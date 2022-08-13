import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
// import myContact from "../components/myContact"
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact" text="Lets Have a chat" />
      {/* <myContact /> */}
      <Footer />
    </div>
  ); 
};

export default Contact;
