import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setClient } from "../../Redux/actions";

function Navbars() {
  const dispatch = useDispatch();
  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  // async function setClient() {
  //   try {
  //     const token = await getAccessTokenSilently();
  //     const info = await axios.get("http://localhost:4000/login/setClient", {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(info.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  async function handleSetClient() {
    let token = await getAccessTokenSilently();
     dispatch(setClient());
     console.log(token)
  }

  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/" className="col-3">
            Dinamita Hostel
          </Navbar.Brand>
          <Nav className="col-7 justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/rooms">Habitaciones</Nav.Link>
            <Nav.Link href="/contact">Contactanos</Nav.Link>
            <Nav.Link href="/about">Acerca de</Nav.Link>
            <Nav.Link href="/reviewHostel">Reviews</Nav.Link>
          </Nav>
          <>
            {isAuthenticated ? (
              <Navbar.Collapse className="container basic-navbar-nav m-auto col-1 ms-3">
                <img
                  src={isAuthenticated ? user.picture : ""}
                  alt="foto perfil"
                  className="rounded-circle w-25"
                />
                <Nav className="me-auto">
                  <NavDropdown title="Perfil" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/clientEdit">
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
                href="/#login"
                onClick={async (e) => {
                  e.preventDefault()
                  await loginWithPopup();
                  handleSetClient();
                }}
              >
                Login
              </Navbar.Brand>
            )}
          </>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbars;
