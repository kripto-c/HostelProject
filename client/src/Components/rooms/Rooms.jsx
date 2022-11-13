import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getRooms } from "../../Redux/actions" 
import RoomCard from "./RoomCard.jsx"
import Footer from "../Layout/Footer"
import style from "./Rooms.module.css"
import Filters from "./Filters"

export default function Rooms() {
    const allRooms = useSelector((state) => state.rooms)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getRooms())
    }, [dispatch])

    return (
        <div className={style.Container}>
            <Filters/>
                
            <div className="container">
                <div className="row">
                    {allRooms && allRooms.map(e => {    
                        return(
                            <div className="view  overlay">
                                <RoomCard
                                    beds={e.beds} description={e.description} image={e.image} bathroom={e.bathroom} type={e.type}
                                    id= {e.id}
                                />  
                            </div>
                        )  
                    })}
                </div>
            </div>

            <Footer />
        </div>
    )
}