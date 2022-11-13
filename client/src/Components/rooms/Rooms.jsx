import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { filterTypeRoom, getRooms } from "../../Redux/actions/index.js";
import RoomCard from "./RoomCard.jsx";
import style from "./Rooms.module.css";

export default function Rooms() {
  const allRooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [typeBatchroom, setTypeBatchroom] = useState("");

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  function roomTypeHandler(e) {
    if (e.target.name === "filterRoomType") {
      return setType(e.target.value);
    }

    setTypeBatchroom(e.target.value);
  }
  function handleSubmitFilter(e) {
    e.preventDefault();
    dispatch(filterTypeRoom(type, typeBatchroom));
    console.log(type, typeBatchroom);
  }

  return (
    <div className={style.Container}>
      <h1>
        <i>HABITACIONES</i>
      </h1>

      <div className={style.Cards}>
        <div>
          <select
            id="type"
            defaultValue="Todo"
            value={type}
            name="filterRoomType"
            onChange={(e) => roomTypeHandler(e)}
          >
            <option value="Todo" hidden>
              Tipo de habitación
            </option>
            <option value="roomPrivate">Privado</option>
            <option value="roomPublic">Público</option>
          </select>
          <select
            id="type"
            defaultValue="Todo"
            value={typeBatchroom}
            onChange={(e) => roomTypeHandler(e)}
          >
            <option value="Todo" hidden>
              Tipo de habitación
            </option>
            <option value="batchroomPrivate">Privado</option>
            <option value="batchroomPublic">Público</option>
          </select>
          <button type="button" onClick={(e) => handleSubmitFilter(e)}>
            Filtrar
          </button>

          <h1>Habitaciones</h1>

          {allRooms &&
            allRooms.map((e) => {
              return (
                <RoomCard
                  beds={e.beds}
                  type={e.type.type ? e.type.type : null}
                  description={e.description}
                  image={e.image}
                  bathroom={e.bathroom}
                  className={style.Card}
                  id={e.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
