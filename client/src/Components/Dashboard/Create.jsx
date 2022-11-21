import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../Redux/actions";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import Edit from "./EditRoom";

const Create = () => {
  // SETTEAR INFO//
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState({
    beds: "",
    description: "",
    image: "",
    bathroom: "",
    observation: "",
    price: "",
    typeId: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // SUBIR IMAGENES CON CLOUDINARY //
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "hostelImage");
    setLoading(true);
    const res = await fetch("http://api.cloudinary.com/v1_1/drw5h95um/upload", {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    setImage(file.secure_url.toString());
    setLoading(false);
    setRoom({
      ...room,
      image: file.secure_url,
    });
  };

  // HANDLES //

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  const handlebañoSelect = (e) => {
    setRoom({
      ...room,
      bathroom: e.target.value,
    });
  };

  const handleTipoSelect = (e) => {
    setRoom({
      ...room,
      typeId: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !room.beds ||
      !room.bathroom ||
      !room.description ||
      !room.image ||
      !room.observation ||
      !room.price ||
      !room.typeId
    ) {
      Swal.fire({
        icon: "error",
        title: "Debes completar todos los datos!",
      });
    } else {
      dispatch(createRoom(room));
      Swal.fire({
        icon: "success",
        title: "Habitacion Creada Correctamente",
      });
      setRoom({
        beds: "",
        description: "",
        image: "",
        bathroom: "",
        observation: "",
        price: "",
        type: "",
      });
      navigate("/");
    }
  };

  return (
    <div>
      <div className="box-create">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Row>
            <Form.Group as={Col} md="5">
              <Form.Label>Baño(OBLIGATORIO): </Form.Label>
              <Form.Select onChange={(e) => handlebañoSelect(e)}>
                <option>Elegir tipo de baño</option>
                <option value="True">Privado</option>
                <option value="False">Compartido</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="5">
              <Form.Label>Tipo(OBLIGATORIO): </Form.Label>
              <Form.Select onChange={(e) => handleTipoSelect(e)}>
                <option>Elegir tipo de Habitacion</option>
                <option value="1">Compartida</option>
                <option value="2">Privada</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-around">
            <Form.Group as={Col} md="5">
              <Form.Label>Observaciones: </Form.Label>
              <Form.Control
                as="textarea"
                name="observation"
                placeholder="Escribir una observacion acerca de la habitacion"
                value={room.observation}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="5">
              <Form.Label>Descripcion(OBLIGATORIO): </Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Escribir una description acerca de la habitacion"
                value={room.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-around">
            <Form.Group as={Col} md="2">
              <Form.Label>Camas(OBLIGATORIO): </Form.Label>
              <Form.Control
                type="number"
                name="beds"
                min="1"
                max="10"
                value={room.beds}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Precio(OBLIGATORIO): </Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="10000"
                name="price"
                value={room.price}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-between">
            <Form.Group as={Col} md="5">
              <Form.Label>Instertar imagen(OBLIGATORIO): </Form.Label>
              <Form.Control
                name="file"
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="7">
              <img
                style={{
                  width: "450px",
                  height: "300px",
                  backgroundSize: "cover",
                  marginTop: "5px",
                  objectFit: "cover",
                }}
                alt=""
                src={image}
              />
            </Form.Group>
          </Row>

          <Button className="submit" type="submit">
            Crear
          </Button>
        </Form>
      </div>
      <Edit />
    </div>
  );
};

export default Create;
