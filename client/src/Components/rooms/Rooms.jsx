import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getRooms } from "../../Redux/actions"
import RoomCard from "./RoomCard.jsx"

export default function Rooms() {
    const allRooms = useSelector((state) => state.rooms)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRooms())
    }, [dispatch])

    return (
        <div>
            {console.log(allRooms)}
        
            <h1>Habitaciones</h1>
            {allRooms && allRooms.map(e => {    
                return(
                    <RoomCard
                        beds={e.beds} description={e.description} image={e.image} bathroom={e.bathroom} type={e.type}
                    />  
                )  
            
        })}
        </div>
    )
}