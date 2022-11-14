import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { getCLient } from "../../Redux/actions";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {useState, useEffect } from 'react'
import './navbar.css'; 
function Navbars() {
  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
 const dispatch = useDispatch();
 const client = useSelector((state) => state.client);
  const[view, setView] = useState(true);
  const [confirmLog, setConfirmLog] = useState(false);
  const [Sort, setSort] = useState("");

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
      localStorage.setItem("email", info.data.email);
    } catch (error) {
      console.log(error);
    }
  }
  const verOptiones = ()=>{
    const bar = document.querySelector('.nav')
    if(view) {
      setView(false)
      return bar.style.height='max-content'
    } else {
      setView(true);
      return bar.style.height='0'
    };
  }
  useEffect(()=>{
    let email = localStorage.getItem("email");
    if(email) {
      dispatch(getCLient(email));
      setConfirmLog(true);
    };
    if(client.length > 0 && isAuthenticated ){
      dispatch(getCLient(client.email));
    }
    console.log(email);
    console.log("client", client.length);
    console.log("authenticated", isAuthenticated);
},[dispatch])
  console.log(user);
  console.log(isAuthenticated)
  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container className="d-flex justify-content-between cont">
          <Link style={{textDecoration: "none"}} to="/">
            <p>Dinamita Hostel</p>
          </Link>
          <div className="res">
            <div className="but">
              <div className="act" onClick={verOptiones}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Nav className="nav">
              <Link className="linkComponent" to="/">Home</Link>
              <Link className="linkComponent" to="/rooms">Habitaciones</Link>
              <Link className="linkComponent" to="/contact">Contactanos</Link>
              <Link className="linkComponent" to="/about">Acerca de</Link>
              {
                confirmLog &&
              <Link className="linkComponent" to="/reviewHostel">Reviews</Link>
              }
            </Nav>
          </div>
          <>
          {isAuthenticated ? (

          
             <Navbar.Collapse className="loginInfo">
             <img src={isAuthenticated ? user.picture : ""} alt="foto perfil" className='rounded-circle profileIMG'/>
              <Nav className="me-auto CuentaLog">
                <button className="miCuentaOp">Mi Cuenta</button>
                  <div className="LoginOp">
                  <Link to="/clientEdit" className="clientEdit">
                    Editar Datos
                  </Link>
                  <NavDropdown.Item href="#action/3.2">
                    Registro
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" onClick={() =>{ 
                    localStorage.clear(); 
                    logout(); 
                    setConfirmLog(false);
                    setSort("deslogueado")
                    }}>
                    cerrar sesión
                  </NavDropdown.Item>
                  </div>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Link
              className="Login"
              to='/#login'
              onClick={async (e) => {
                e.preventDefault()
                await loginWithPopup();
                setClient();
                setConfirmLog(true);
              }}
            >
              Login
            </Link>
          )}
    </> 
        </Container>
      </Navbar>

    </>
  );
}

export default Navbars;
