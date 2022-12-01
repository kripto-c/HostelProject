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
      <h1>Servicios</h1>

      <Container className="divServicios">
        <Row>
          
          <Col className="">
            <Wifi></Wifi>
            <div className="container-fluid w-50 ms-2"><small className="text"> Wifi <strong>Gratis</strong></small></div>
            
          </Col>
          
          <Col>
            <Recepcion></Recepcion>
            <div className="container-fluid w-50 ms-2"><small className="text"><strong>Recepción</strong></small></div>
          </Col>
          <Col>
            <Lavanderia></Lavanderia>
            <div className="container-fluid w-50 ms-2"><small className="text">Servicio de <strong>Lavanderia</strong></small></div>
          </Col>
          <Col>
            <Tv />
            <div className="container-fluid w-75 align-items-center ms-0 "><small className="text"><strong>TV </strong>en sala común</small></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
