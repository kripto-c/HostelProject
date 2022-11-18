import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p>Contactos: 123-4567-890</p>
        <p>Dinamita Hostel</p>
        <p>Copyright Team Dinamita®</p>
      </div>
      <div className="links">
        <span>PODRIA INTERESARTE: </span>
        <Link to="contact">FAQ</Link>
        <Link to="reviewHostel">Reviews</Link>
      </div>
      <div className="logos">
        <span>NUESTRAS REDES SOCIALES:</span>
        <a href="https://www.facebook.com/" target="blank">
          <img
            src="https://img.icons8.com/color/48/null/facebook.png"
            alt="logo-facebook"
          /> Facebook
        </a>
        <a href="https://www.instagram.com/?hl=es-la" target='blank'>
          <img
            src="https://img.icons8.com/color/48/null/instagram-new--v1.png"
            alt="logo-instagram"
          /> Instragram
        </a>

        <a href="https://twitter.com/" tartget="blank">
          <img
            src="https://img.icons8.com/color/48/null/twitter--v1.png"
            alt="logo-twitter"
          /> Twitter
        </a>

        <a href="https://github.com/" target='blank'>
          <img
            src="https://img.icons8.com/sf-regular/48/null/github.png"
            alt="logo-github"
          /> Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
