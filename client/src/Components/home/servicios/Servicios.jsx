import React from "react";
import Lavanderia from "./Lavanderia";
import Recepcion from "./Recepcion";
import "./servicios.css";
import Wifi from "./Wifi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Servicios() {
  return (
    <div className="container-fluid">
        <h1>Servicios</h1>
        <Container bg-red>
      <Row>
        <Col> <Wifi></Wifi></Col>
        <Col><Recepcion></Recepcion></Col>
      </Row>
      <Row>
        <Col><Lavanderia></Lavanderia></Col>
        <Col>Servicio</Col>
        <Col>Servicio</Col>
      </Row>
    </Container>
     
    </div>
  );
}
