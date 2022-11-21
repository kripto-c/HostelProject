import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Create from "./Create";
import OwnerCrud from "../OwnerCrud";
import Dashboard from "./Dashboard";
import Payments from "./Payments";
import ReviewAdmin from "./ReviewAdmin";
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
export default function PanelAdmin() {
  const navigate= useNavigate();
  useEffect(()=>navigate("/admin/dashboard"),[])
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <div>
      
        {
          console.log(show)
        }
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
      </div>
    </React.Fragment>
  );
}

