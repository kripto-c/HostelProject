import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function PanelAdmin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Sidebar></Sidebar>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
        <Dashboard></Dashboard>
        </div>
        
      </div>
    </div>
  );
}
