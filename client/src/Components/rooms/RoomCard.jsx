import React from "react";
import { Link } from "react-router-dom";
export default function RoomCard({
  beds,
  description,
  image,
  bathroom,
  type,
  id,
  price,
  beds_avalaibles,
  status,
}) {
  let typeRoom = "";

  if (type === "Publico") {
    typeRoom = "compartida";
  } else if (type === "Privado") {
    typeRoom = "privada";
  }

  return (
    <div className="container bg-dark my-3 rounded w-100" >
      <div className="row py-3">
        <img
          src={image[0]}
          alt="bedroom"
          className="col-md-3 ml-3 rounded"
          width="200px" /* height="180px" */
          // style={{marginRight: "1vw" }}
         
        ></img>
        <div className="col-md-9 ">
          <h2 className="tittle text-white ms-0">
            Habitación {type === "Privado" ? "privada" : "compartida"}
          </h2>
          <h4 className="text-secondary">
            {" "}
            {beds_avalaibles >= 1 && !status
              ? "Camas disponibles: " + beds_avalaibles
              : "Habitacion no disponible"}
          </h4>
          <p className="text-secondary">{description}</p>
          <p className="text-secondary">
            Baño {bathroom ? "privado" : "compartido"}
          </p>
          <p className="text-light">Precio: ${price}</p>
          <Link style={{ textDecoration: "none" }} to={`/roomdetail/${id}`}>
            <button className="btn btn-primary">Reservar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
