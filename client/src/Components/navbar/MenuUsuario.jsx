import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {BiCog} from "react-icons/bi";
import { IconContext } from "react-icons";
//----
import Swal from 'sweetalert2'
import { useAuth0 } from "@auth0/auth0-react";
import { getCLient,getOwner, setClient, getRolUser, getStatus } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


import { useState, useEffect } from "react";
import "./MenuUsuario.css";
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
  const client = useSelector(state=> state.client)
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
  const [view, setView] = useState(true);
  const [confirmLog, setConfirmLog] = useState(false);
  const [Sort, setSort] = useState("");
  
  async function saveClient() {
    try {
      const token = await getAccessTokenSilently();
     await dispatch(setClient(token))
     await dispatch(getStatus(token))
     await getInfo();
    } catch (error) {
      console.log(error);
    }
  }
  async function getInfo() {
    const token = await getAccessTokenSilently();
    dispatch(getCLient(token));
  }
  const [show1, setShow1] = useState(false);
  
  async function getRol(){
    const token = await getAccessTokenSilently();
     await dispatch(getRolUser(token))
    let rol = localStorage.getItem("Rol");
    if(rol === "menu-client" || !rol ){
         saveClient();
      }
      else{
        await dispatch(getOwner(token))
      }
  }

async function statusUser() {
 if(localStorage.getItem("status") == "disabled"){
   Swal.fire({
           position: 'center',
           icon: 'error',
           title: 'Su cuenta ha sido bloqueada. Consulte con el administrador en la seccion Contactanos',
           showConfirmButton: false,
           timer: 6000
         })
         setTimeout(() => {
           logout()
          }, 2000);
        }
      
}

  useEffect(() => {
    let idUser = localStorage.getItem("IDUser");
    if (idUser) {
      getInfo();
      setConfirmLog(true);
    }
  }, [dispatch]);
  return (
    <>
            {
              (localStorage.getItem("Rol") === "menu-admin" )
               &&  <button
                 type="button"
                 onClick={() => {
                   setShow1(true);
                 }}
                 style={{position: "fixed", top: "8.5%", left: ".5%", width: "55px", height: "50px", padding: "5px" }}
                className="btn btn-dark fas fa-cog"
               >
                <IconContext.Provider value={{ size: "30"}}>
                <BiCog />
                </IconContext.Provider>
               </button>
             }

          {isAuthenticated ? (
            <>
            <Offcanvas show={show1} onHide={() =>{setShow1(false)}} style={{backgroundColor: "#212121"}}>
              <Sidebar></Sidebar>
            </Offcanvas>
            <Button variant="outline-light" onClick={handleShow} className="ms-5 w-10">
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
              <Button
                variant="outline-light"
                to="/#login"
                className="ms-5 w-10"
                onClick={async (e) => {
                  e.preventDefault();
                  await loginWithPopup();
                  await getRol();
                  await statusUser();
                  setConfirmLog(true);
                }}
              >
                Login
              </Button>
          )}
    </>
  );
}
<Offcanvas.Body></Offcanvas.Body>;
