import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.webp"

const AboutContent = () => {
  return( 
  <div className="about">
<div className="left">
<h1>
  WHO AM I ?
</h1>
<p>
  {/* Ask your papa */}
  I am  a react front-end developer . I create responsive cool and secure websites for my clients.
</p>
<Link to="/contact" >
  <button className="btn">Contact</button>
</Link>
</div>
<div className="right">
<div className="img-container">
  <div className="img-stack top">
<img className="img" src={react1} alt="imgreact1" />
  </div>
  <div className="img-stack bottom">
<img className="img" src={react2} alt="imgreact2" />
  </div>
</div>
</div>
  </div>
  );
};

export default AboutContent;
