import React from "react";
import "./Header.css";
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
const Header = () => {
  return (
    <>
    <NavBar bg="dark" variant="dark">
      <Container>
        <NavBar.Brand c href="/home">Dinamita Hostel</NavBar.Brand>{' '}
        <Nav className="justify-content-flex">
        <Nav.Link>Inicio</Nav.Link>
        <Nav.Link>Habitaciones</Nav.Link>
        <Nav.Link>Contactanos</Nav.Link>
        <Nav.Link>Acerca de...</Nav.Link>
        </Nav>
        
        
      </Container>
    </NavBar>
    </>
  );
};

export default Header;
