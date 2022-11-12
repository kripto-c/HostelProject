import React from "react"
import style from "./RoomCard.module.css"
import {Link} from "react-router-dom"
export default function RoomCard({beds, description, image, bathroom, type, id}) {
    return (
        <div  className="container bg-dark my-3">
            <Link style={{ textDecoration: 'none' }} to={`/roomdetail/${id}`}>
                <div className="row py-3">
                    <img src={image} alt="bedroom" className="col-md-3 ml-3" width="250px"></img>
                    <div className="col-md-9 ">
                        <h2 className="tittle text-white ms-0">Habitación {type}</h2>
                        <h4 className="text-secondary">Habitación para {beds} personas</h4>
                        <p className="text-secondary">{description}</p>
                        <p className="text-secondary">Baño {bathroom}</p>
                    </div>
                    
                    <button>Reservar</button>
                </div>
            </Link>
        </div>
    )
}