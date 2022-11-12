import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"
import { filterTypeRoom, getRooms } from "../../Redux/actions"
import RoomCard from "./RoomCard.jsx"
import Footer from "../Layout/Footer"
import style from "./Rooms.module.css"

export default function Rooms() {
    const allRooms = useSelector((state) => state.rooms)
    const dispatch = useDispatch()
    const [type, setType] = useState("");

    useEffect(() => {
        dispatch(getRooms())
    }, [dispatch])

    function roomTypeHandler(e){
        dispatch(filterTypeRoom(e.target.value))
        setType(e.target.value);
    }

    return (
        <div className={style.Container}>
            <h1><i>HABITACIONES</i></h1>
        <div className={style.Container}>
            
            <div className={style.Cards}>
                <select id='type' defaultValue="Todo" onChange={(e) => roomTypeHandler(e)} >
                    <option value="Todo" hidden >Tipo de habitación</option>
                    <option value="Privado" >Privado</option>
                    <option value="Público" >Público</option>
                </select>
              
            <div className="container">
                <div className="row">
            {allRooms && allRooms.map(e => {    
                return(
                    <div className="view  overlay">
                        <RoomCard
                            beds={e.beds} description={e.description} image={e.image} bathroom={e.bathroom} type={e.type}
                            /* className=".hoverable" */ id= {e.id}
                        />  
                    </div>
                )  
                
            
            })}
                </div>
           
            </div>
            <Footer />
            </div>
        </div>
        </div>
    )
}