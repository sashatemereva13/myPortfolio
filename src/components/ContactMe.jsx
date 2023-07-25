import React from "react";
import "./contactMe.css";
import Social from "./Social";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <h1>
        <span className="contacts-letter-animation">C</span>
        <span className="contacts-letter-animation">o</span>
        <span className="contacts-letter-animation">n</span>
        <span className="contacts-letter-animation">t</span>
        <span className="contacts-letter-animation">a</span>
        <span className="contacts-letter-animation">c</span>
        <span className="contacts-letter-animation">t</span>
        <span className="contacts-letter-animation">s</span>
      </h1>
      <div className="contacts">
        <div className="text">
          <p>
            I’m actively searching for a new role now! Feel free to contact me
            about avaiblable positions in London, UK.
          </p>
          <div className="social">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
