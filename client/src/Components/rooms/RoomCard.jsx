import React from "react"
import style from "./RoomCard.module.css"
import {Link} from "react-router-dom"
export default function RoomCard({beds, description, image, bathroom, type, id}) {
    return (
        <div  className={style.contain} style={{width: "120vh"}}>
            <Link style={{ textDecoration: 'none' }} to={`/roomdetail/${id}`}>
                <div className={style.Container}>
                    <img src={image} alt="bedroom" className={style.Image}></img>
                    <div className={style.Detail}>
                        <h2>Habitación {type}</h2>
                        <h4>Habitación para {beds} personas</h4>
                        <p>{description}</p>
                        <p>Baño {bathroom?"Privado":"Publico"}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}