import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function PanelAdmin() {
  return (
    <React.Fragment>
      
      <div>
        <Sidebar></Sidebar>

        <Dashboard></Dashboard>
        </div>
       
    </React.Fragment>
  );
}
