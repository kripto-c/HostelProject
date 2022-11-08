import React from "react";
import Button from "react-bootstrap/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img src="" alt="hostel-logo" />
      </div>
      <div>
        <Button variant="primary" type="button">Inicio</Button>{" "}
        <Button variant="primary">Habitaciones</Button>{" "}
        <Button variant="primary">Galeria</Button>{" "}
        <Button variant="primary">Blog</Button>{" "}
        <Button variant="primary">Contactanos</Button>{" "}
      </div>
    </div>
  );
};

export default Header;
