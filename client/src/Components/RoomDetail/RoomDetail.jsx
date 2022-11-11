import React, {useState} from 'react'
import './RoomDetail.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

export default function RoomDetail(){
   
    const [camas, setCamas] = useState(0);
    const [total, setTotal] = useState(0);
    const [checkIn, setCheckIn] = useState(0);
    const [checkOut, setCheckOut] = useState(0);
    const [pagar, setPagar] = useState('');

    //========DATOS DE EJEMPLOS======//
    let detailRoom = {
        img: 'http://www.decorablog.com/wp-content/2008/11/habitacion-hotel-1.jpg',
        name: 'Nombre de habitacion',
        beds: 5,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, corrupti voluptas? Quibusdam tenetur alias placeat dolor. Quasi ullam commodi et nostrum. Blanditiis atque, totam minima nemo culpa qui id in, vitae corporis enim excepturi. Maiores a doloribus nemo sed officiis similique, alias vitae eius? Eos delectus impedit vitae temporibus corporis.",
        price: 3500,
        status: true,
        observation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, blanditiis."
    }

    let user = {
        name: "nombre",
        surname: 'ejemplo',
        email: "emailejemplo@gmail.com",
        identification: {
            type: "DNI",
            number: 12345678
        }
    }
    //========DATOS DE EJEMPLOS======//

    let {id} = useParams();
    const dispatch = useDispatch();
    

    let arreglo = [];
    for (let a = 1; a <= detailRoom.beds; a++) {
        arreglo.push(a);
    }
   
    const sumres = (e)=>{
        if(e.target.checked) {
            setCamas(camas+1)
            return setTotal(total+3500)
        }
        setCamas(camas-1)
        return setTotal(total-3500)
    }

    const data = (b, e)=>{
        if(b) return setCheckIn(e.target.value.split('-').reverse().join('-'));
        return setCheckOut(e.target.value.split('-').reverse().join('-'));
    }

    const pay = async ()=>{
        const body = {}
        body.items = [{
            title: detailRoom.name,
            quantity: camas,
            unit_price: detailRoom.price,
            check_in: checkIn,
            check_out: checkOut
        }]
        body.user = user;
        console.log(body)
        const result = await axios.post("http://localhost:4000/payment", body);
        
        setPagar(result.data.init);
        console.log(result.data.id);
    }
    return (
    <div className='detailRoom'>
        <h1>Detalle de la habitacion</h1>
        <div className='datas'>
            <div>
                <label>check-in</label>
                <input onChange={(e)=>data(true,e)} type="date" name="" id="" />
            </div>
            <div>
                <label>check-out</label>
                <input onChange={(e)=>data(false,e)} type="date" name="" id="" />
            </div>
        </div>
        <div className='infoRoom'>
            <div>
                <h3>{detailRoom.name}</h3>
                <p>{detailRoom.description}</p><br />
                <h4>${detailRoom.price} por cama</h4>
            </div>
            <img width="300" height='200' src={detailRoom.img} alt='habitacion de Hostel' />
        </div>
        <p className='Ac'><b>Accommodations</b></p>
        {arreglo.map((e)=>{
            return (<div key={e} className='listBeds'>
                <label>Cama</label> <input disabled={!detailRoom.status} onClick={sumres} type="checkbox" />
            </div>)
        })}
        <div className='pay'>
            <p><b>Total ${total}</b></p>
            <button onClick={pay}>Pagar</button>
        </div>
        {!pagar.length ? null : <div className='IframeDiv'>
            <iframe className='PagarIframe' src={pagar} frameborder="0"></iframe>
        </div> }
    </div>
 
   )
}
