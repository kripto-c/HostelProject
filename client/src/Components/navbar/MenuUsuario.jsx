import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

//----
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { getCLient } from "../../Redux/actions";
import { getOwner } from "../../Redux/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuUsuario.css";
import logo from "../../images/logo.svg";
import Sidebar from "../Dashboard/Sidebar";

const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
  {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

export default function MenuUsuario({ name, ...props }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client);
  const [view, setView] = useState(true);
  const [confirmLog, setConfirmLog] = useState(false);
  const [Sort, setSort] = useState("");
  async function setClient() {
    try {
      const token = await getAccessTokenSilently();
      // const info = await axios.get("http://localhost:4000/login/setClient", {
        const info = await axios.get("https://dinamitahostel.herokuapp.com/login/setClient", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(info.data);
      getInfo();
      localStorage.setItem("IDUser", info.data.id);
    } catch (error) {
      console.log(error);
    }
  }
  async function getInfo() {
    const token = await getAccessTokenSilently();
    dispatch(getCLient(token));
  }
  const [show1, setShow1] = useState(false);
  const[sidebar, setSidebar] = useState(false);
  
  async function getRol(){
    const token = await getAccessTokenSilently();
    const info = await axios.get("https://dinamitahostel.herokuapp.com/rol", {
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
        setSidebar(true);
      }
      console.log(info.data.rol[0])
  }
  useEffect(() => {
    let idUser = localStorage.getItem("IDUser");
    if (idUser) {
      getInfo();
      setConfirmLog(true);
    }
    if (client.length > 0 && isAuthenticated) {
      getInfo();
    }
  }, [dispatch]);
  return (
    <>
      {/* <div className="container bg-dark d-flex" backdrop="true"> */}
        

          {isAuthenticated ? (
            <>
            <Offcanvas show={show1} onHide={() =>{setShow1(false)}} style={{backgroundColor: "#212121"}}>
              <Sidebar></Sidebar>
            </Offcanvas>
            <Button variant="primary" onClick={handleShow} className="ms-5 w-10">
        Menu
      </Button>
            <Offcanvas show={show} placement="end" onHide={handleClose} {...props}>
                
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <div className="container bg-light ">
              <Offcanvas.Body className="d-grid offcanvas-body gap-1 mx-auto">
                <img
                  src={isAuthenticated ? user.picture : ""}
                  alt="foto perfil"
                  className="rounded-circle profileIMG"
                />

                <div className="row">
                  <div className="">
                    <div className="list-group" id="list-tab" role="tablist">
                      <button
                        to="/"
                        className="list-group-item list-group-item-action active"
                        id="list-home-list"
                        data-bs-toggle="list"
                        role="tab"
                        aria-controls="list-home"
                      >
                        Mi cuenta
                      </button>
                      <button
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                          navigate("/clientEdit");
                        }}
                        id="list-profile-list"
                        data-bs-toggle="list"
                        role="tab"
                        aria-controls="list-profile"
                      >
                        Editar datos
                      </button>

                      <button
                        className="list-group-item list-group-item-action "
                        id="list-messages-list"
                        data-bs-toggle="list"
                        onClick={() => navigate("/reviewHostel")}
                        role="tab"
                        aria-controls="list-messages"
                      >
                        Reviews
                      </button>
                    </div>
                  </div>
                </div>
                {
                sidebar &&  <button
                    type="button"
                    onClick={() => {
                      localStorage.clear();
                      setShow1(true);
                      console.log(show1)
                    }}
                    className="btn btn-outline-danger"
                  >
                    Sidebar
                  </button>
                }
                <button
                  type="button"
                  onClick={() => {
                    localStorage.clear();
                    logout();
                    setConfirmLog(false);
                    setSort("deslogueado");
                  }}
                  className="btn btn-outline-danger"
                >
                  Cerrar Sesion
                </button>
              </Offcanvas.Body>
            </div>
            </Offcanvas>
            </>
          ) : (
            
             
              <button
                type="button"
                className="Login btn btn-outline-light"
                to="/#login"
                onClick={async (e) => {
                  e.preventDefault();
                  await loginWithPopup();
                  await getRol();
                  setConfirmLog(true);
                }}
              >
                Login
              </button>
            
          )}
        
      {/* </div> */}
    </>
  );
}

<Offcanvas.Body></Offcanvas.Body>;
// {isAuthenticated ? (
//     <Navbar.Collapse className="loginInfo">
//       <img
//         src={isAuthenticated ? user.picture : ""}
//         alt="foto perfil"
//         className="rounded-circle profileIMG"
//       />
//       <Nav className="me-auto CuentaLog">
//         <button className="miCuentaOp">Mi Cuenta</button>
//         <div className="LoginOp">
//           <Link to="/clientEdit" className="clientEdit">
//             Editar Datos
//           </Link>
//           <NavDropdown.Item href="#action/3.2">
//             Registro
//           </NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item
//             href="#action/3.4"
//             onClick={() => {
//               localStorage.clear();
//               logout();
//               setConfirmLog(false);
//               setSort("deslogueado");
//             }}
//           >
//             cerrar sesión
//           </NavDropdown.Item>
//         </div>
//       </Nav>
//     </Navbar.Collapse>
//   ) : (
//     <Link
//       className="Login"
//       to="/#login"
//       onClick={async (e) => {
//         e.preventDefault();
//         await loginWithPopup();
//         setClient();
//         setConfirmLog(true);
//       }}
//     >
//       Login
//     </Link>
//   )}
