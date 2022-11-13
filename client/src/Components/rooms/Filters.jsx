// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { filterTypeRoom } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
// import style from "./RoomCard.module.css";

export default function Filters({getRooms}) {
  // const allRooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const [typeBatchroom, setTypeBatchroom] = useState("");
  const [type, setType] = useState("");
  // useEffect(() => {
  //   dispatch(getRooms());
  // }, [dispatch]);

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
  function recargarFiltros(e){
    e.preventDefault();
    setType("")
    setTypeBatchroom("")
    dispatch(getRooms())
    
  }
  return (
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
        <option value="Todo" hidden>Tipo de baño</option>
        <option value="batchroomPrivate">Privado</option>
        <option value="batchroomPublic">Público</option>
      </select>
      <button type="button" onClick={(e) => handleSubmitFilter(e)}>
        Filtrar
      </button>
      <button type="button" onClick={e=>recargarFiltros(e)}>Recargar</button>
    </div>
  );
}

// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { filterTypeRoom } from "../../Redux/actions";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import style from "./RoomCard.module.css";

// export default function Filters() {
//   function NavDropdownExample() {
//     const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

//     const dispatch = useDispatch();
//     const [type, setType] = useState("");

//     function roomTypeHandler(e) {
//       dispatch(filterTypeRoom(e.target.value));
//       setType(e.target.value);
//     }

//     return (
//       <Nav
//         variant="pills"
//         activeKey="1"
//         onSelect={handleSelect}
//         className={style.FilterNav}
//       >
//         <NavDropdown
//           title="Tipo de habitación"
//           id="nav-dropdown"
//           onChange={(e) => roomTypeHandler(e)}
//           className={style.NavDropdown}
//         >
//           <NavDropdown.Item eventKey="1.1" value="Privado">
//             Privado
//           </NavDropdown.Item>
//           <NavDropdown.Item eventKey="1.2" value="Público">
//             Público
//           </NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     );
//   }

//   return <NavDropdownExample />;
// }

