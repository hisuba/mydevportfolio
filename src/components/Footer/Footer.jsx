import React from "react";
import "./footer.css";
import { TelephoneFill, EnvelopeCheckFill } from "react-bootstrap-icons";
/* import { FaPhoneAlt } from "react-icons/fa"; */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        {/* <FaPhoneAlt /> */}
          <span> <TelephoneFill className="icon" /> +91 8328679557</span>
         <span> <EnvelopeCheckFill className="icon" /> balubujugani@gmail.com</span>
      </div>
      <div>Copyright 2024 Bala Suresh. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
