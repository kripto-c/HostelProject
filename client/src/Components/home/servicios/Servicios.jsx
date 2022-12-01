import React from "react";
import Lavanderia from "./Lavanderia";
import Recepcion from "./Recepcion";
import "./servicios.css";
import Wifi from "./Wifi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tv from "./Tv";

export default function Servicios() {
  return (
    <div className="container-fluid">
      

      <Container className="divServicios">
      
          <div><h1>Servicios</h1></div>
          
        <Row>
          <Col className="m-auto mt-4">
          <h1>Servicios</h1>
          </Col>
          
          
          <Col className="">
            <Wifi></Wifi>
            <div className="container-fluid w-50 ms-2"><small className="text"> Wifi Gratis</small></div>
            
          </Col>
          
          <Col>
            <Recepcion></Recepcion>
            <div className="container-fluid w-50 ms-2"><small className="text">Recepción</small></div>
          </Col>
          <Col>
            <Lavanderia></Lavanderia>
            <div className="container-fluid w-50 ms-2"><small className="text">Servicio de Lavanderia</small></div>
          </Col>
          <Col>
            <Tv />
            <div className="container-fluid w-75 align-items-center ms-0 "><small className="text">TV en sala común</small></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
