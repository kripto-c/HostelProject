import React from "react"

export default function RoomCard({beds, description, image, bathroom, type}) {
    console.log(beds, description, image, bathroom, type)
    return (
        <div>
            <img src={image} alt=""></img>
            <div>
                <h2>Habitación {type}</h2>
                <h4>Habitación para {beds} personas</h4>
                <p>{description}</p>
                <p>Baño {bathroom}</p>
            </div>
        </div>
    )
}