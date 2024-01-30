import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_buh0a8n",
        "template_bqmw99r",
        form.current,
        "ZsSsvXDaA6_p9ol833vXd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <div className="contactPageTitle">Contact Me</div>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit = {sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name = 'your_name' />
          <input type="email" className="email" placeholder="Your Email" name = 'your_email' />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type=" submit" value=" Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} className="link" alt="" />
            <img src={TwitterIcon} className="link" alt="" />
            <img src={YoutubeIcon} className="link" alt="" />
            <img src={InstagramIcon} className="link" alt="" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
