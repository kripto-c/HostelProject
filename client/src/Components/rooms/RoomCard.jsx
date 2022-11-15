import React from "react"
import {Link} from "react-router-dom"
export default function RoomCard({beds, description, image, bathroom, type, price, id}) {

    return (
        <div className="container bg-dark my-3" >
            {/* <Link style={{ textDecoration: 'none' }} to={`/roomdetail/${id}`}> */}
                <div className="row py-3">
                    <img src={image} alt="bedroom" className="col-md-3 ml-3" width="200px" /* height="180px" */></img>
                    <div className="col-md-9 ">
                        <h2 className="tittle text-white ms-0">Habitación {type ==="Privado"?"privada":"compartida"}</h2>
                        <h4 className="text-secondary"> {beds >= 1 ?"Camas disponibles: " + beds : "Habitacion ocupada"}</h4>
                        <p className="text-secondary">{description}</p>
                        <p className="text-secondary">Baño {bathroom?"privado":"compartido"}</p>
                        <p className="text-primary">Precio: ${price}</p>
                        <Link style={{ textDecoration: 'none' }} to={`/roomdetail/${id}`}>
                            <button className="btn btn-primary">Reservar</button>
                        </Link>
                    </div>
                    
                </div>
            {/* </Link> */}
        </div>
    )
}//Habitación para {beds === 1 ? beds + " persona" : beds + " personas"}