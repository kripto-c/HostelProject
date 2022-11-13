import React from "react"
// import style from "./RoomCard.module.css"
import {Link} from "react-router-dom"
export default function RoomCard({beds, description, image, bathroom, type, id}) {
    return (
        <div  className={style.contain} style={{width: "120vh"}}>
            <Link style={{ textDecoration: 'none' }} to={`/roomdetail/${id}`}>
<<<<<<< Updated upstream
                <div className={style.Container}>
                    <img src={image} alt="bedroom" className={style.Image}></img>
                    <div className={style.Detail}>
                        <h2>Habitación {type}</h2>
                        <h4>Habitación para {beds} personas</h4>
                        <p>{description}</p>
                        <p>Baño {bathroom?"Privado":"Publico"}</p>
=======
                <div className="row py-3">
                    <img src={image} alt="bedroom" className="col-md-3 ml-3" width="250px"></img>
                    <div className="col-md-9 ">
                        <h2 className="tittle text-white ms-0">Habitación {type}</h2>
                        <h4 className="text-secondary">Habitación para {beds} personas</h4>
                        <p className="text-secondary">{description}</p>
                        <p className="text-secondary">Baño {bathroom?"Privado":"Publico"}</p>
>>>>>>> Stashed changes
                    </div>
                </div>
            </Link>
        </div>
    )
}