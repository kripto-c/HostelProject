import React, {useEffect, useState} from 'react'
import './RoomDetail.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getRoomDetail } from '../../Redux/actions';
import Footer from "../Layout/Footer";

export default function RoomDetail(){
   
    const [camas, setCamas] = useState(0);
    const [total, setTotal] = useState(0);
    const [checkIn, setCheckIn] = useState(0);
    const [checkOut, setCheckOut] = useState(0);
    const [pagar, setPagar] = useState('');
    
    //========DATOS DE EJEMPLOS======//

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

    useEffect(() =>{
        dispatch(getRoomDetail(id))
    },[dispatch]);

    const room = useSelector((state) => state.roomdetail);
    const client = useSelector((state) => state.client);


    let arreglo = [];
    for (let a = 1; a <= room.beds; a++) {
        arreglo.push(a);
    }
   
    const sumres = (e)=>{
        if(e.target.checked) {
            setCamas(camas+1)
            return setTotal(total+room.price)
        }
        setCamas(camas-1)
        return setTotal(total-room.price)
    }

    const data = (b, e)=>{
        if(b) return setCheckIn(e.target.value.split('-').reverse().join('-'));
        return setCheckOut(e.target.value.split('-').reverse().join('-'));
    }

    const pay = async ()=>{
        const body = {}
        body.items = [{
            title: room.name,
            quantity: camas,
            unit_price: room.price,
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
                <label>Dia de llegada</label>
                <input onChange={(e)=>data(true,e)} type="date" name="" id="" />
            </div>
            <div>
                <label>Dia de salida</label>
                <input onChange={(e)=>data(false,e)} type="date" name="" id="" />
            </div>
        </div>
        <div className='infoRoom'>
            <div>
                <h3>{room.name}</h3>
                <p>{room.description}</p><br />
                <h4>${room.price} por cama</h4>
            </div>
            <img className='image' width="600" height='400' src={room.image} alt='habitacion de Hostel' />
        </div>
        <p className='Ac'><b>Alojamientos</b></p>
        {arreglo.map((e)=>{
            return (<div key={e} className='listBeds'>
                <label>Cama</label> <input disabled={!room.status} onClick={sumres} type="checkbox" />
            </div>)
        })}
        {
            !room.status && (<div className='disponibilidad' >No hay camas disponibles</div>)
        }
        <div className='pay'>
            <p><b>Total ${total}</b></p>
            <button onClick={pay}>Pagar</button>
        </div>
        {!pagar.length ? null : <div className='IframeDiv'>
            <iframe className='PagarIframe' src={pagar} frameborder="0"></iframe>
        </div> }
        <br/>
        <Footer />
    </div>
 
   )
}
