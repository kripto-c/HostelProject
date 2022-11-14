import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p>Contactos: xxx-xxxx-xxx</p>
        <p>Dinamita Hostel</p>
        <p>Copyright Team Dinamita®</p>
      </div>
      <div className="logos">
        <span>Nuestras redes sociales:</span>
        <a href="https://www.facebook.com/" target="blank">
          <img
            src="https://img.icons8.com/color/48/null/facebook.png"
            alt="logo-facebook"
          />
        </a>
        <a href="https://www.instagram.com/?hl=es-la" target='blank'>
          <img
            src="https://img.icons8.com/color/48/null/instagram-new--v1.png"
            alt="logo-instagram"
          />
        </a>

        <a href="https://twitter.com/" tartget="blank">
          <img
            src="https://img.icons8.com/color/48/null/twitter--v1.png"
            alt="logo-twitter"
          />
        </a>

        <a href="https://github.com/" target='blank'>
          <img
            src="https://img.icons8.com/sf-regular/48/null/github.png"
            alt="logo-github"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
