import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { getCLient } from "../../Redux/actions";
import axios from "axios";
import { useDispatch} from "react-redux";

function Navbars() {
  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
 const dispatch = useDispatch();

  async function setClient() {
    try {
      const token = await getAccessTokenSilently();
      const info = await axios.get("http://localhost:4000/login/setClient", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(info.data);
      await dispatch(getCLient(info.data.email))
    } catch (error) {
      console.log(error);
    }
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
            <Nav.Link href="/reservas">Reservas</Nav.Link>
            <Nav.Link href="/rooms">Habitaciones</Nav.Link>
            <Nav.Link href="/contactanos">Contactanos</Nav.Link>
            {/* <Nav.Link href="/acerca">Acerca de</Nav.Link> */}
            {/* <Nav.Link href="/rooms">Habitaciones</Nav.Link> */}
            {/* <Nav.Link href="/contact">Contactanos</Nav.Link> */}
            <Nav.Link href="/about">Acerca de</Nav.Link>
            <Nav.Link href="/reviewHostel">Reviews</Nav.Link>
          </Nav>
          <>
          {isAuthenticated ? (

          
             <Navbar.Collapse className="container basic-navbar-nav m-auto col-1 ms-3">
             <img src={isAuthenticated ? user.picture : ""} alt="foto perfil" className='rounded-circle w-100'/>
              <Nav className="me-auto">
                <NavDropdown title="Mi cuenta" id="basic-nav-dropdown" variant='dark'>
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
              href="/#login"
              onClick={async () => {
                await loginWithPopup();
                setClient();
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
