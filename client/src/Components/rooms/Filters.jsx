import { filterTypeRoom } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./Filters.module.css";

export default function Filters({getRooms}) {
  const dispatch = useDispatch();
  const [typeBatchroom, setTypeBatchroom] = useState("");
  const [type, setType] = useState("");

  function roomTypeHandler(e) {
    if (e.target.name === "filterRoomType") {
      return setType(e.target.value);
    }

    setTypeBatchroom(e.target.value);
  }
  function handleSubmitFilter(e) {
    if(!type && !typeBatchroom){
      return alert("No hay filtros a aplicar")
    }
    e.preventDefault();
    dispatch(filterTypeRoom(type, typeBatchroom));
    console.log(type, typeBatchroom);
  }
  function recargarFiltros(e){
    e.preventDefault();
    setType("")
    setTypeBatchroom("")
    dispatch(getRooms())
    
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
            <option value="Todo" hidden>Tipo de habitación</option>
            <option value="roomPrivate">Privado</option>
            <option value="roomPublic">Público</option>
          </select>
        </li>

        <li className="nav-item mx-1">
          <select
            id="type" 
            defaultValue="Todo"
            value={typeBatchroom}
            onChange={(e) => roomTypeHandler(e)}
            className="form-select"
          >
            <option value="Todo" hidden>Tipo de baño</option>
            <option value="batchroomPrivate">Privado</option>
            <option value="batchroomPublic">Público</option>
          </select>
        </li>

        <li className="nav-item ms-1">
          <button type="button" onClick={(e) => handleSubmitFilter(e)} className="nav-item  btn btn-primary">Filtrar</button>
        </li>

        <li className="nav-item">
          <button type="button" onClick={e=>recargarFiltros(e)} className="nav-item mx-2 btn btn-primary">Quitar filtros</button>
        </li>

      </nav>
    </div>
  );
}


