import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
  <div className="form">
    <form action="">
      <label htmlFor="name">Your Name</label> 
      <input type="text" name="namw" id="name" />

      <label htmlFor="mail">Email</label> 
      <input type="email" name="mail" id="mail" />

      <label htmlFor="sub">Subject</label> 
      <input type="text" name="sub" id="sub" />
       
      <label htmlFor="msg">Message</label> 
     <textarea name="msg" id="msg"  rows="6" placeholder="Type your message here"/>
   <input type="submit" value="submit" className="btn" />
    </form>
  </div>
  );
};

export default Form;
