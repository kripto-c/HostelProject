import React from "react"
import style from "./RoomCard.module.css"

export default function RoomCard({beds, description, image, bathroom, type}) {
    return (
        <div className={style.Container}>
            <img src={image} alt="bedroom" className={style.Image}></img>
            <div className={style.Detail}>
                <h2>Habitación {type}</h2>
                <h4>Habitación para {beds} personas</h4>
                <p>{description}</p>
                <p>Baño {bathroom}</p>
            </div>
        </div>
    )
}