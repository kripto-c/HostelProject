import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'


function Navbars() {
  const { loginWithPopup, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  async function setClient () {
    try {
      const token = await getAccessTokenSilently();
       const info = await axios.get('http://localhost:4000/login/setClient', {
         headers:{
            authorization:`Bearer ${token}`
         },
       })
       console.log(info.data)
    } catch (error) {
       console.log(error);
    }
  }
  
  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/" className='col-3'>Dinamita Hostel</Navbar.Brand>
          <Nav className="col-7 justify-content-end">
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/reservas">Reservas</Nav.Link>
            <Nav.Link href="/habitaciones">Habitaciones</Nav.Link>
            <Nav.Link href="/contactanos">Contactanos</Nav.Link>
            <Nav.Link href="/acerca">Acerca de</Nav.Link>
          </Nav>
          {isAuthenticated ? (
           <>
          
             <Navbar.Collapse className="container basic-navbar-nav m-auto col-1 ms-3">
             <img src={isAuthenticated ? user.picture : ""} alt="foto perfil" className='rounded-circle w-25'/>
              <Nav className="me-auto">
                <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
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
           </>
          ) : (
            <Navbar.Brand
              href="/#login"
              onClick={async ()=>{
                await loginWithPopup()
                 setClient()
              }}
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