import React from "react";
import { useState } from "react";

const Create = () => {
  const [room, setRoom] = useState({
    camas: "",
    descripcion: "",
    imagen: "",
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
      baños: [...new Set([...room.baños, e.target.value])],
    });
  };

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
            name="imagen"
            value={room.imagen}
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
      </form>
    </div>
  );
};

export default Create;
