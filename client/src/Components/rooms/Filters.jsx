import {  filterTypeRoom } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./Filters.module.css";
const Swal = require('sweetalert2')



export default function Filters({ getRooms, setData }) {
  //Estados -------------------------------------------------->>
  const dispatch = useDispatch(); 
  //Estados locales donde se guardan los value de los select de los filtros!!  (Que despues se hace dispatch en el momento de filtrar) ------------->>
  const [typeBatchroom, setTypeBatchroom] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const listOfBeds = []
  const a = []

  //Traigo estado global de redux allRooms!! que siempre tiene todas las habitaciones!----->>
  const allRooms = useSelector((state) => state.allRooms);
  //Funcion para devolver el localStorage con TODA la informacion inicial que traemos de la base de datos de las rooms!! Se usa en RECARGAR FILTROS ---->> 
  const putRooms = () => {
    localStorage.setItem("filtros", JSON.stringify(allRooms));
  };
  

  function getBeds() {
    listOfBeds.push(allRooms.map(e =>e.beds))
    let sumWithInitial = listOfBeds.reduce(
      function(a, b)  {return a + b;}
    );
    sumWithInitial = sumWithInitial.reduce(
      function(a, b)  {return a + b;}, 0
    );
    a.push(sumWithInitial)
   
  }
  getBeds()

  //FUNCION A EJECUTARSE ANTE CADA CAMBIO EN LOS SELECT!! ---------------------------------------------------------->>
  function roomTypeHandler(e) {
    e.preventDefault();
     //SI EL CAMBIO FUE EN EL SELECT DE TIPO DE HABITACION, GUARDO SU VALOR EN EL ESTADO LOCAL DE TYPE!!-------->
    if (e.target.name === "filterRoomType") {
      console.log("CAMBIO TYPE ROOM");
      return setType(e.target.value);
    }
    //SI EL CAMBIO FUE EN EL SELECT DE TIPO DE BAÑO, GUARDO SU VALOR EN EL ESTADO LOCAL DE TYPE!!-------->
    if (e.target.name === "typeBatchroom") {
      return setTypeBatchroom(e.target.value);
    }
    if (e.target.name === "price") {
      return setPrice(e.target.value);
      
    }
  }
  //SUBMIT DEL BOTON FILTRAR!! ----------------------------------------------->>
  function handleSubmitFilter(e) {
    e.preventDefault();
    if (!type && !typeBatchroom && !price) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay filtros a aplicar',
      })
    } else 
    if(a[0] === 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay camas disponibles',
      }) }
      else{
        dispatch(filterTypeRoom(type, typeBatchroom, price));
        setData(true);
      }
  }

  //FUNCION PARA RECARGAR FILTROS!!! ------------------------------------------>>
  function recargarFiltros(e) {
    e.preventDefault();
    setType("");
    setTypeBatchroom("");
    setPrice("");
    putRooms()
    setData(true)
    dispatch(getRooms());
  }

  //------------------------------------>>> RENDER --------------------------------------------------------------->>>>>>>>>>>>>>>>
  return (
    <div className={style.Container}>
      <nav className="nav nav-pills d-flex justify-content-center">
    {/* SELECT TIPO DE HABITACION----------------------------------------------->> */}
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
{/* SELECT TIPO DE BAÑO----------------------------------------------->> */}
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
{/* SELECT ORDENAR PRECIOS----------------------------------------------->> */}
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
              Ordenar por precio
            </option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </li>
{/* BOTON SUBMIT ----------------------------------------------->> */}
        <li className="nav-item ms-1">
          <button
            type="button"
            onClick={(e) => handleSubmitFilter(e)}
            className="nav-item  btn btn-primary"
          >
            Filtrar
          </button>
        </li>
 {/* BOTON QUITAR FILTROS  ----------------------------------------------->> */}
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
