import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="contactTitle">Connect with us!!</h1>
        <div className="contactIcons">
          <a
            href="https://www.instagram.com/shamily_sasidharan/"
            target="_blank"
            rel="noopener noreferrer"
            className="link conIcon"
          >
            <i class="fab fa-instagram-square"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/shamily-sasidharan-563b02211/"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/shamily1994"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-github-square"></i>
          </a>

          
        </div>
      </div>
    </div>
  );
}
