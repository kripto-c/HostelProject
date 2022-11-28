
import { Route, Routes, useNavigate } from "react-router-dom";
import Create from "./Create";
import OwnerCrud from "../OwnerCrud";
import Dashboard from "./Dashboard";
import Payments from "./Payments";
import ReviewAdmin from "./ReviewAdmin";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Faqs from "./Faqs";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./backRoutesAdmin.css";

export default function PanelAdmin() {
  // const navigate= useNavigate();
  /* useEffect(()=>navigate("/admin/dashboard"),[]) */
  /* useEffect(()=>navigate("/admin/"),[]) */
  const [validando, setValidando] = useState(true)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const {isAuthenticated, getAccessTokenSilently} = useAuth0();
  const navigate = useNavigate();

   

  useEffect(()=>{
    if(!isAuthenticated) return navigate('/');
    else if (localStorage.getItem('Rol') !== "menu-admin") return navigate('/');
    (async () => {
      console.log("Validando permiso")
      try {
        const token = await getAccessTokenSilently();
        console.log(token)
        const response = await axios('http://localhost:4000/rol', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if(response.data.rol[0] !== "menu-admin") return navigate('/');
        setValidando(false)
        console.log("ADMIN VALIDADO") 
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <React.Fragment>
      <div className={validando ? "backRoutesAdmin" : null}>
        <Offcanvas show={show} onHide={() =>{setShow(false)}} style={{backgroundColor: "#212121"}}>
          <Sidebar></Sidebar>
        </Offcanvas>
          <Routes>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
          </Routes>
          <Routes>
            <Route path="reviewsAdmin" element={<ReviewAdmin></ReviewAdmin>}></Route>
          </Routes>
          <Routes>
            <Route path="roomsAdmin" element={<Create></Create>}></Route>
          </Routes>
          <Routes>
             <Route path="payments" element={<Payments></Payments>}></Route> 
          </Routes>
          <Routes>
            <Route path="settings" element={<OwnerCrud></OwnerCrud>}></Route>
          </Routes>
          <Routes>
            <Route path="faqs" element={<Faqs/>}></Route>
          </Routes>
      </div>
    </React.Fragment>
  );
}
