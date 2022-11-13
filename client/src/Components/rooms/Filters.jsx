import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { filterTypeRoom} from "../../Redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import style from "./RoomCard.module.css"

export default function Filters() {


function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  const dispatch = useDispatch()
  const [type, setType] = useState("");

  function roomTypeHandler(e){
    dispatch(filterTypeRoom(e.target.value))
    setType(e.target.value);
}

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect} className={style.FilterNav}>
      <NavDropdown title="Tipo de habitación" id="nav-dropdown" onChange={(e) => roomTypeHandler(e)} className={style.NavDropdown}>
        <NavDropdown.Item eventKey="1.1" value="Privado">Privado</NavDropdown.Item>
        <NavDropdown.Item eventKey="1.2" value="Público">Público</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}



return(<NavDropdownExample />);
}