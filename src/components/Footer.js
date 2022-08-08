import "./FooterStyles.css";

import React from "react";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Abiola-way, OgunState</p>
              <p>Abeokuta</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              0907-678-8105
            </h4>
          </div>
          <div className="email">
            <h4>
              <a href="mailto:temmydammy16@gmail.com"> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                temmydammy16@gmail.com</a>
            </h4>
          </div>
          <div className="whatsapp">
            <h4>
              <a href="https://wa.me/+2349076788105"> <FaWhatsapp size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                +2349076788105</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>
            About My Self
          </h4>
          <p>This is me Ariyibi Daniel ,Front-end-developer of ATC .I enjoy discussing & making new projects and design & challenges </p>
          <div className="social">
            <a href="http://facebook.com/GideonsSonnDann">   <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
            <a href="http://twitter.com"> <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
            <a href="https://www.linkedin.com/in/daniel-dammy-850833238/"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
            <a href="http://instagram.com/dah_nny_dee"><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>



          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
