import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "../Layout/Footer";

import { getRooms } from "../../Redux/actions/index.js";
import RoomCard from "./RoomCard.jsx";
import Filters from "./Filters";
import { useState } from "react";

export default function Rooms() {
  const dispatch = useDispatch();
  
  //Se carga base de datos al entrar a ROOMS!!---------------------------------------------->> Carga BASE DE DATOS
  useEffect(() => {
    dispatch(getRooms());
    
  }, []);

   //Almacenamos estado rooms de redux en variable allRooms ---------------------------------------->>
   let allRooms = useSelector((state) => state.allRooms);

   //DATA ES TRUE CUANDO HAGO CAMBIOS EN LOS FILTROS ---------------------------->>
   const [data, setData] = useState(true);
 
   //VARIABLE CON LAS ROOMS ACTUALES QUE SE VAN A RENDERIZAR !!! ------------->>
   let roomsCurrent = JSON.parse(localStorage.getItem("filtros")) || allRooms;
 
   //-------------------------------------------------------------------------
   //Renderizo componente cada vez que obtengo informacion de localStorage!!.Se ejecuita ante cada cambio en data, que se cambia a true al hacer un SUBMIT de los filtros
   useEffect(() => {
     // getData();
     JSON.parse(localStorage.getItem("filtros"));
     setData(false);
   }, [data]);
 
   //--------------------------------------------------------------RENDER---------------------------------------------------------->> <<<<<<<render>>>>>>
  
  
  return (
    <div>
      <Filters getRooms={getRooms} setData={setData} />

      <div className="container">
        <div className="row">
        {roomsCurrent &&
            roomsCurrent.map((e) => {
              return (
                <div key={e.id} className="view overlay">
                  <RoomCard
                    beds={e.beds}
                    description={e.description}
                    image={e.image}
                    bathroom={e.bathroom}
                    id={e.id}
                    type={e.type?.type}
                    price={e.price}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
