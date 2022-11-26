import React from "react";
import Lavanderia from "./Lavanderia";
import Recepcion from "./Recepcion";
import "./servicios.css";
import Wifi from "./Wifi";

export default function Servicios() {
  return (
    <div className="container-fluid">
      <div>
        <h1>Servicios</h1>
      </div>
      {/*------------------------------ WIFI -------------------------------------------------------------------->> */}
      <div className="row">
        <div className="col-md-4">
          <Wifi></Wifi>
        </div>

        {/* Recepcion -------------------------------------------------------------------->> */}
        <div className="col-md-4">
          <Recepcion></Recepcion>
        </div>

        {/* Lavanderia -------------------------------------------------------------------------------->> */}
        <div className="col-md-4">
          <Lavanderia></Lavanderia>
        </div>
      </div>
    </div>
  );
}
