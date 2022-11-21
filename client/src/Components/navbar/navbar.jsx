import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { getCLient, getOwner } from "../../Redux/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../images/logo.svg";
import MenuUsuario from "./MenuUsuario.jsx";
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
  const navigate = useNavigate();
  const [view, setView] = useState(true);
  const [confirmLog, setConfirmLog] = useState(false);
  const [Sort, setSort] = useState("");

  

  async function setClient() {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      // const info = await axios.get("http://localhost:4000/login/setClient", {
        const info = await axios.get("https://hosteldinamitabackend.herokuapp.com/login/setClient", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(info.data);
      getInfoClient();
      localStorage.setItem("IDUser", info.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  const verOptiones = () => {
    const bar = document.querySelector(".nav");
    if (view) {
      setView(false);
      return (bar.style.height = "max-content");
    } else {
      setView(true);
      return (bar.style.height = "0");
    }
  };

  async function getInfoClient() {
    const token = await getAccessTokenSilently();
    dispatch(getCLient(token));
  }

  async function getRol(){
    /// ESTA FUNCION NO ESTA ANDANDO ANDA AL MENUUSUARIO:JSX!!!!!!!!!
    //***************************************************************** */
    const token = await getAccessTokenSilently();
    const info = await axios.get("http://localhost:4000/rol", {
      // const info = await axios.get("https://hosteldinamitabackend.herokuapp.com/login/setClient", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(token);
      
      if(info.data.rol[0] === "menu-client" || info.data.rol.length == 0){
        setClient();
      }
      else{
        await dispatch(getOwner(
          token
        ))
      }
      console.log(info.data.rol[0])
  }


  useEffect(() => {
    let idUser = localStorage.getItem("IDUser");
    if (idUser) {
      getInfoClient();
      setConfirmLog(true);
    }  
  }, [dispatch]);

  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container fluid>
          <Link style={{ textDecoration: "none" }} to="/" className="d-block">
            {/* <h2 className="h5">Dinamita Hostel</h2> */}
            {/* <div className="container-fluid "> */}
            <div className="navbar-brand d-flex">
              <img
                src={logo}
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top bg-light rounded-1"
              />
              <p className="m-auto ms-3">Dinamita Hostel</p>
            </div>
            {/* </div> */}
          </Link>
          <div className="w-75 mx-auto justify-content-center nav navbar-nav navbar-nav">
            <div className="but">
              <div className="act" onClick={verOptiones}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Nav className="w-75 m-auto nav justify-content-center navbar-nav">
              <Link className="linkComponent fs-5" to="/admin">
                Tablero
              </Link>
              <Link className="linkComponent fs-5" to="/rooms">
                Habitaciones
              </Link>
              <Link className="linkComponent fs-5" to="/contact">
                Contactanos
              </Link>
              <Link className="linkComponent fs-5" to="/about">
                Acerca de
              </Link>
              {/* {isAuthenticated && (
                <Link className="linkComponent fs-5" to="/reviewHostel">
                  Reviews
                </Link>
              )} */}
              {/* <Link className="linkComponent" to="/createRoom">
                    Crear Habitacion
                  </Link> */}

              {/* {confirmLog && (
                <>
                  
                </>
                
              )} */}

              {/*-------------------------------------------------------------------------------------- */}

              {/*------------------------------------------------------------------------------------------- */}
            </Nav>
            
           
            
          </div>
          <ul className="navbar-nav ml-auto">
              <li>
                <MenuUsuario className="m-5" />
              </li>
            </ul>
          {/* <>
            {isAuthenticated ? (
              <Navbar.Collapse className="loginInfo">
                <img
                  src={isAuthenticated ? user.picture : ""}
                  alt="foto perfil"
                  className="rounded-circle profileIMG"
                />
                <Nav className="me-auto CuentaLog">
                  <button className="miCuentaOp">Mi Cuenta</button>
                  <div className="LoginOp">
              
                    {
                      (isAuthenticated && user.rol[0] === "menu-admin") ?
                     <Link to="/setting">configuracion de sitio</Link >:
                     <Link to="/clientEdit" className="clientEdit">
                     Editar mi cuenta
                   </Link>
                      }
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action/3.4"
                      onClick={() => {
                        localStorage.clear();
                        logout();
                        setConfirmLog(false);
                        setSort("deslogueado");
                      }}
                    >
                      cerrar sesión
                    </NavDropdown.Item>
                  </div>
                </Nav>
              </Navbar.Collapse>
            ) : (
              <Link
                className="Login"
                to="/#login"
                onClick={async (e) => {
                  e.preventDefault();
                  await loginWithPopup();
                  await getRol();
                  setConfirmLog(true);
                }}
              >
                Login
              </Link>
            )}
          </> */}
        </Container>

      </Navbar>
      {/* {
       isAuthenticated && <pre style={{textAlign: 'start'}}>{JSON.stringify(user, null, 2)}</pre>
      } */}
    </>
  );
}

export default Navbars;
