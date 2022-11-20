import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Create from "./Create";
import OwnerCrud from "../OwnerCrud";
import Dashboard from "./Dashboard";
import Payments from "./Payments";
import ReviewAdmin from "./ReviewAdmin";
import Sidebar from "./Sidebar";

export default function PanelAdmin() {
  const navigate= useNavigate();
  useEffect(()=>navigate("/admin/dashboard"),[])

  
  return (
    <React.Fragment>
      <div>
        <Sidebar></Sidebar>
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
