import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../Redux/actions";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      baños: [e.target.value],
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
      !room.camas &&
      !room.baño &&
      !room.descripcion &&
      !room.file &&
      !room.observacion &&
      !room.precio &&
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
    }
  };

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <div>
            <label>Camas: </label>
            <input
              type="number"
              name="camas"
              min="1"
              max="10"
              value={room.camas}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Descripcion: </label>
            <input
              type="text"
              name="descripcion"
              value={room.descripcion}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Baño: </label>
            <select
              placeholder="Seleccionar tipo"
              onChange={(e) => handleBañoSelect(e)}
            >
              <option value="Privado">Privado</option>
              <option value="Compartido">Compartido</option>
            </select>
          </div>
          <div>
            <label>Tipo: </label>
            <select onChange={(e) => handleTipoSelect(e)}>
              <option value="compartida">Compartida</option>
              <option value="privada">Privada</option>
            </select>
          </div>
          <div>
            <label>Instertar imagen: </label>
            <input
              name="file"
              type="file"
              onChange={(e) => {
                uploadImage(e);
              }}
            />
          </div>
          <div>
            <img
              style={{
                width: "450px",
                height: "300px",
                backgroundSize: "cover",
              }}
              alt=""
              src={image}
            />
          </div>
          <div>
            <label>Observaciones: </label>
            <input
              type="text"
              name="observacion"
              value={room.observacion}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Precio: </label>
            <input
              type="number"
              min="0"
              max="10000"
              name="precio"
              value={room.precio}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button type="submit">Crear</Button>
      </Form>
    </div>
  );
};

export default Create;
