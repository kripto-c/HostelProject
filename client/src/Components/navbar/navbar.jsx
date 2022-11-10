import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";

function Navbars() {
  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/">Dinamita Hostel</Navbar.Brand>
          <Nav className="col-10  justify-content-end">
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/reservas">Reservas</Nav.Link>
            <Nav.Link href="/habitaciones">Habitaciones</Nav.Link>
            <Nav.Link href="/contactanos">Contactanos</Nav.Link>
            <Nav.Link href="/acerca">Acerca de</Nav.Link>
          </Nav>
          {isAuthenticated ? (
            <Navbar.Collapse id="basic-navbar-nav m-auto col-2 me-5">
              <Nav className="me-auto">
                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Editar Datos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Registro
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" onClick={logout}>
                    cerrar sesión
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Brand
              href="/login"
              className="col-2 text-end"
              onClick={loginWithPopup}
            >
              Login
            </Navbar.Brand>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
