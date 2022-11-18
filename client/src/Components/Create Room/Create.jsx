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

const Create = () => {
  // SETTEAR INFO//
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState({
    camas: "",
    descripcion: "",
    file: "",
    baño: "",
    tipo: "",
    observacion: "",
    precio: "",
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
      file: [file.secure_url],
    });
  };

  // HANDLES //

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  const handleBañoSelect = (e) => {
    setRoom({
      ...room,
      baño: [e.target.value],
    });
  };

  const handleTipoSelect = (e) => {
    setRoom({
      ...room,
      tipo: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !room.camas ||
      !room.baño ||
      !room.descripcion ||
      !room.file ||
      !room.observacion ||
      !room.precio ||
      !room.tipo
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
        camas: "",
        descripcion: "",
        file: "",
        baño: "",
        tipo: "",
        observacion: "",
        precio: "",
      });
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <Row className="d-flex justify-content-around">
            <Form.Group as={Col} md="4">
              <Form.Label>Instertar imagen: </Form.Label>
              <Form.Control
                name="file"
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="7">
              {image.length < 1 ? (
                <h1>no ha seleccionado una imagen</h1>
              ) : (
                <img
                  style={{
                    width: "450px",
                    height: "300px",
                    backgroundSize: "cover",
                    marginTop: "5px",
                    border: "3px solid black",
                  }}
                  alt=""
                  src={image}
                />
              )}
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="5">
              <Form.Label>Baño: </Form.Label>
              <Form.Select onChange={(e) => handleBañoSelect(e)}>
                <option placeholder="Seleccion tipo de baño" value="Privado">
                  Privado
                </option>
                <option value="Compartido">Compartido</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="1">
              <Form.Label>Camas: </Form.Label>
              <Form.Control
                type="number"
                name="camas"
                min="1"
                max="10"
                value={room.camas}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="5">
              <Form.Label>Tipo: </Form.Label>
              <Form.Select onChange={(e) => handleTipoSelect(e)}>
                <option value="compartida">Compartida</option>
                <option value="privada">Privada</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-around">
            <Form.Group as={Col} md="5">
              <Form.Label>Observaciones: </Form.Label>
              <Form.Control
                as="textarea"
                name="observacion"
                placeholder="Escribir una observacion acerca de la habitacion"
                value={room.observacion}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="5">
              <Form.Label>Descripcion: </Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion"
                placeholder="Escribir una descripcion acerca de la habitacion"
                value={room.descripcion}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center">
            <Form.Group as={Col} md="2">
              <Form.Label>Precio: </Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="10000"
                name="precio"
                value={room.precio}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
        </div>
        <Button type="submit">Crear</Button>
      </Form>
    </div>
  );
};

export default Create;
