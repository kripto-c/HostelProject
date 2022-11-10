import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getRooms } from "../../Redux/actions"
import { Link } from "react-router-dom"
import RoomCard from "./RoomCard.jsx"
import style from "./Rooms.module.css"

export default function Rooms() {
    const allRooms = useSelector((state) => state.rooms)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRooms())
    }, [dispatch])

    return (
        <div className={style.Container}>
            <h1><i>HABITACIONES</i></h1>
            <div className={style.Cards}>
            {allRooms && allRooms.map(e => {    
                return(
                    
                        <RoomCard
                            beds={e.beds} description={e.description} image={e.image} bathroom={e.bathroom} type={e.type}
                            className={style.Card}
                        />  
                    
                )  
            
            })}
            </div>
        </div>
    )
}