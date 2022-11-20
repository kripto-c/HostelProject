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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuUsuario.css";
import logo from "../../images/logo.svg";






const options = [
    {
      name: 'Enable body scrolling',
      scroll: true,
      backdrop: false,
    },
    {
      name: 'Enable backdrop (default)',
      scroll: false,
      backdrop: true,
    },
    {
      name: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
    },
  ];

export default function MenuUsuario({ name, ...props }) {
  const [show, setShow] = useState(false);

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
      const info = await axios.get("http://localhost:4000/login/setClient", {
        // const info = await axios.get("https://hosteldinamitabackend.herokuapp.com/login/setClient", {
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
    
      <Button variant="primary" onClick={handleShow} className="me-2">
        Menu
      </Button>
      <div className="container bg-dark d-flex" backdrop="true">
      <Offcanvas show={show} placement="end" onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>

        {isAuthenticated ? (
          <div className="container bg-light">
            <Offcanvas.Body>
              <img
                src={isAuthenticated ? user.picture : ""}
                alt="foto perfil"
                className="rounded-circle profileIMG"
              />
            </Offcanvas.Body>

            <Offcanvas.Body>
              Mi cuenta
            </Offcanvas.Body>

            <div className="LoginOp">
              <Offcanvas.Body>
                <Link to="/clientEdit" className="clientEdit">
                  Editar Datos
                </Link>
              </Offcanvas.Body>
              <Offcanvas.Body>
                <button
                  onClick={() => {
                    localStorage.clear();
                    logout();
                    setConfirmLog(false);
                    setSort("deslogueado");
                  }}
                ></button>
              </Offcanvas.Body>
              cerrar sesión
              <Offcanvas.Body></Offcanvas.Body>
              <Offcanvas.Body>Registro</Offcanvas.Body>
              <Offcanvas.Body></Offcanvas.Body>
            </div>
          </div>
        ) : (
          <Offcanvas.Body>
            <Link
              className="Login"
              to="/#login"
              onClick={async (e) => {
                e.preventDefault();
                await loginWithPopup();
                setClient();
                setConfirmLog(true);
              }}
            >
              Login
            </Link>
          </Offcanvas.Body>
        )}
      </Offcanvas>
      </div>
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
