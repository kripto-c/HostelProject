import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from '@auth0/auth0-react';


function Navbars() {
  const { loginWithPopup, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  return (
    <>
      <Navbar variant="dark" bg='dark'>
        <Container className='d-flex justify-content-between'>
          <Nav className="col-10  justify-content-center">
            <Nav.Link href='#home'  className='bg-primary rounded-pill w-25 text-center me-1' ><Link to='/' style={{textDecoration:'none', color: 'inherit'}}>Home</Link></Nav.Link>
            <Nav.Link href="#reservas" className='bg-primary rounded-pill w-25 text-center me-1'>Reservas</Nav.Link>
            <Nav.Link href="#habitaciones"  className='bg-primary rounded-pill w-25 text-center me-1'>Habitaciones</Nav.Link>
            <Nav.Link href="#contactanos"  className='bg-primary rounded-pill w-25 text-center me-1'>Contactanos</Nav.Link>
            <Nav.Link href="#acerca"  className='bg-primary rounded-pill w-25 text-center me-1'>Acerca de</Nav.Link>
          </Nav>
       {
        isAuthenticated ?   <Navbar.Collapse id="basic-navbar-nav m-auto col-2 me-5">
        <Nav className="me-auto">
          <NavDropdown title="Perfil" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Editar Datos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Registro</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" onClick={logout}>cerrar sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      :
        <Navbar.Brand href="#home" className='col-2 text-end' onClick={loginWithPopup}>Login</Navbar.Brand>
       
       } 
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;