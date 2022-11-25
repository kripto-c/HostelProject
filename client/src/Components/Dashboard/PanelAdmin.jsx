import React from "react"
import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import OwnerCrud from "../OwnerCrud";
import Dashboard from "./Dashboard";
import Payments from "./Payments";
import ReviewAdmin from "./ReviewAdmin";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Faqs from "./Faqs";


export default function PanelAdmin() {
  // const navigate= useNavigate();
  /* useEffect(()=>navigate("/admin/dashboard"),[]) */
  /* useEffect(()=>navigate("/admin/"),[]) */
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <div>
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

