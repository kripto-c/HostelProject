import { filterPrice, filterTypeRoom } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./Filters.module.css";

export default function Filters({ getRooms }) {
  //Estados -------------------------------------------------->>
  const dispatch = useDispatch();
  const [typeBatchroom, setTypeBatchroom] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  function roomTypeHandler(e) {
    e.preventDefault();
    if (e.target.name === "filterRoomType") {
      console.log("CAMBIO TYPE ROOM");
      return setType(e.target.value);
    }
    if (e.target.name === "typeBatchroom") {
      return setTypeBatchroom(e.target.value);
    }
    if (e.target.name === "price") {
      console.log(e.target.value);
      return setPrice(e.target.value);
      
    }
  }
  function handleSubmitFilter(e) {
    e.preventDefault();
    if (!type && !typeBatchroom && !price) {
      return alert("No hay filtros a aplicar");
    }
    // dispatch(filterPrice(price));
    dispatch(filterTypeRoom(type, typeBatchroom,price));
  }
  function recargarFiltros(e) {
    e.preventDefault();
    setType("");
    setTypeBatchroom("");
    setPrice("");
    dispatch(getRooms());
  }
  return (
    <div className={style.Container}>
      <nav className="nav nav-pills d-flex justify-content-center">
        <li className="nav-item mx-1">
          <select
            id="type"
            defaultValue="Todo"
            value={type}
            name="filterRoomType"
            onChange={(e) => roomTypeHandler(e)}
            className="form-select"
          >
            <option value="Todo" hidden>
              Tipo de habitación
            </option>
            <option value="roomPrivate">Privado</option>
            <option value="roomPublic">Público</option>
          </select>
        </li>

        <li className="nav-item mx-1">
          <select
            id="type"
            defaultValue="Todo"
            name="typeBatchroom"
            value={typeBatchroom}
            onChange={(e) => roomTypeHandler(e)}
            className="form-select"
          >
            <option value="Todo" hidden>
              Tipo de baño
            </option>
            <option value="batchroomPrivate">Privado</option>
            <option value="batchroomPublic">Público</option>
          </select>
        </li>

        <li className="nav-item mx-1">
          {/* Precio */}
          <select
            id="price"
            defaultValue="Todo"
            name="price"
            value={price}
            onChange={(e) => roomTypeHandler(e)}
            className="form-select"
          >
            <option value="Todo" hidden>
              Precio
            </option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </li>

        <li className="nav-item ms-1">
          <button
            type="button"
            onClick={(e) => handleSubmitFilter(e)}
            className="nav-item  btn btn-primary"
          >
            Filtrar
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            onClick={(e) => recargarFiltros(e)}
            className="nav-item mx-2 btn btn-primary"
          >
            Quitar filtros
          </button>
        </li>
      </nav>
    </div>
  );
}
