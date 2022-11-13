import React from "react"
import {Link} from "react-router-dom"
export default function RoomCard({beds, description, image, bathroom, type, id}) {
    let typeRoom = ""

    if(type === "Publico") {
        typeRoom = "compartida"
    } else if(type === "Privado") {
        typeRoom = "privada"
    }

    return (
        <div className="container bg-dark my-3" >
            <Link style={{ textDecoration: 'none' }} to={`/roomdetail/${id}`}>
                <div className="row py-3">
                    <img src={image} alt="bedroom" className="col-md-3 ml-3" width="200px" height="180px"></img>
                    <div className="col-md-9 ">
                        <h2 className="tittle text-white ms-0">Habitación {typeRoom}</h2>
                        <h4 className="text-secondary">Habitación para {beds === 1 ? beds + " persona" : beds + " personas"}</h4>
                        <p className="text-secondary">{description}</p>
                        <p className="text-secondary">Baño {bathroom?"privado":"compartido"}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}