import React from "react";
import { useState } from "react";

const Create = (props) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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
    console.log(res);
    setImage(file.secure_url);
    setLoading(false);
  };

  const [room, setRoom] = useState({
    camas: "",
    descripcion: "",
    file: "",
    precio: "",
    baños: "",
  });

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

  const handleImageChange = () =>{
    setRoom({
      ...room,
      file: image
    })
  }

  return (
    <div>
      <form>
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
          <label>Baños: </label>
          <select
            placeholder="Seleccionar tipo"
            onChange={(e) => handleBañoSelect(e)}
          >
            <option value="Privado">Privado</option>
            <option value="Compartido">Compartido</option>
          </select>
        </div>
        <div>
          <label>Instertar imagen: </label>
          <input
            type="file"
            name="file"
            value={image}
            onChange={() => {
              handleImageChange();
              uploadImage();
            }}
          />
        </div>
        <div>
          <img
            style={{ width: "450px", height: "300px", backgroundSize: "cover" }}
            alt=""
            src={image}
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
      </form>
    </div>
  );
};

export default Create;
