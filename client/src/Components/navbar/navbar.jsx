import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { setClient } from "../../Redux/actions";
import { useDispatch } from "react-redux";

function Navbars() {
  const dispatch = useDispatch();
  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  // function handleClick(e) {
  //   return async function () {
  //     const token = await getAccessTokenSilently();
  //     dispatch(setClient(token));
  //     console.log(token);
  //   };
  // }
  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/">Dinamita Hostel</Navbar.Brand>
          <Nav className="col-10  justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/rooms">Habitaciones</Nav.Link>
            <Nav.Link href="/contact">Contactanos</Nav.Link>
            <Nav.Link href="/about">Acerca de</Nav.Link>
            <Nav.Link href="/reviewHostel">Reviews</Nav.Link>
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
              href="/"
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
