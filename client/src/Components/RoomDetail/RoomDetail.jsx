import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { getCLient, postClient } from "../../Redux/actions";
import { BsFillPencilFill } from "react-icons/bs";
/////////////////
import './RoomDetail.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { getRoomDetail } from '../../Redux/actions';
import Footer from "../Layout/Footer";

export default function RoomDetail(){
    const room = useSelector((state) => state.roomdetail);
    const client = useSelector((state) => state.client);
    const { getAccessTokenSilently } = useAuth0();
    const [camas, setCamas] = useState(0);
    const [total, setTotal] = useState(0);
    const [checkIn, setCheckIn] = useState(0);
    const [checkOut, setCheckOut] = useState(0);
    const [pagar, setPagar] = useState('');
    const [cargando, setCargando] = useState(false);
    const [login, setLogin] = useState(false);
    //CONTROL DEL FORM

/////ventana emergente
const dispatch = useDispatch();
// const client =  useSelector(state=> state.client);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
const [name, setName ] = useState(true)
const [lastname, setLastname] = useState(true);

const [clientInf,setClientInfo ]= useState({
    nationality:""
})
///////


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
    const userLogin = useAuth0();
    const navigate = useNavigate();

    let {id} = useParams();

    useEffect(() =>{
        dispatch(getRoomDetail(id))
    },[dispatch]);


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

        // VERIFICACION DE DATOS DE LA RESERVA
        if(!userLogin.isAuthenticated) return null
        if(!camas && !checkIn && !checkOut && !pagar) return alert("Complete el form antes de pedir una reserva");
        if(!camas) return alert("Seleccione cuantas camas desea reservar");
        if(!checkIn) return alert("Por favor ingrese una fecha de ingreso");
        if(!checkOut) return alert("Por favor ingrese una fecha de salida");
        console.log(client)
        
       //CONTROL DE DATOS DEL USUARIO

        if(!client.name || !client.lastname || !client.nacionality || !client.phoneNumber || !client.email){
            
            return setShow(true);
        } 

        
            const body = {}
            body.items = [{
                title: room.description,
                quantity: camas,
                unit_price: room.price,
                check_in: checkIn,
                check_out: checkOut,
                room_id : room.id
            }]
            body.user = user;
            const token = await getAccessTokenSilently();
    
            const result = await axios.post("http://localhost:4000/payment", body,
                {headers:{
                    authorization:`Bearer ${token}`
                 }
                } 
        );
            
            setPagar(result.data.init);






    }

///handle ventana emergente

function handleChange(e) {
    setClientInfo({
       ...clientInf, [e.target.name]: e.target.value
    })
    console.log(clientInf);
}
function handleName(e) {
    e.preventDefault()
    setName(!name);
}

function handleLastName(e) {
 e.preventDefault()
 setLastname(!lastname);
}

async function handleSubmit(e) {
e.preventDefault()
const token = await getAccessTokenSilently();
const authorization  =  {headers:{
   authorization:`Bearer ${token}`
}
} 
await dispatch(postClient(client.email, clientInf, authorization))
setClientInfo({})
await dispatch(getCLient(client.email))
setName(true);
setLastname(true);

} 

function active(e) {
e.preventDefault()
setShow(true);
}



    return (
    <div className='detailRoom'>
             <button onClick={e=> active(e)}>alert</button>
             {
                // CONTROL DE DATOS DE USUARIO
            ( show ) && 
           <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton className="bg-primary text-white">
             <Modal.Title>Datos del Cliente</Modal.Title>
           </Modal.Header>
           <Modal.Body className='bg-dark text-white'>
             {
                ( !client.nacionality || !client.phoneNumber || !client.email) && 
                (<p>Por favor complete con los datos faltantes</p>)
             }


             <Form onSubmit={e=> handleSubmit(e) }>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Nombre</Form.Label>
                 <div className="input-group">
             { client.name ?
                <>                
                <input type="text" className="form-control" name='name' id="validationCustom01" disabled={name} value={name ? client.name : clientInf.name }  onChange={e=> handleChange(e)} required />
                 <button className="btn btn-outline-danger" type='button' onClick={e => handleName(e)}><BsFillPencilFill /></button>
                </>
                  :
                  <Form.Control
                  onChange={e=> handleChange(e)}
                   className=' bg-gradient'
                    type="text"
                    placeholder="Nombre"
                    autoFocus
                    name='name'
                  />
                  }
                  </div>
                <Form.Label>Apellido</Form.Label>
                <div className="input-group">
                {
                    client.lastname ?
                    <>
                    <input type="text" className="form-control" id="validationCustom02" name='lastname' disabled={lastname} value={lastname ? client.lastname : clientInf.lastname}  onChange={e=> handleChange(e)} required />
                    <button className="btn btn-outline-danger" type='button' onClick={e =>handleLastName(e)}><BsFillPencilFill /></button>                    
                    </>:
                       <Form.Control
                           onChange={e=> handleChange(e)}
                            className=' bg-gradient'
                             type="text"
                             placeholder="Apellido"
                             autoFocus
                             name='lastname'
                           />
                           }
            

                </div>
                <Form.Label>Provincia</Form.Label>
               <Form.Select aria-label="Default select example"
                 name="nationality"
                 onChange={e=> handleChange(e)}
               >
               <option>Selecciona tu Provincia</option>
               <option value="venezuela">venezuela</option>
               <option value="argentina">argentina</option>
               <option value="Canada">Canada</option>
              </Form.Select>
                <Form.Label>DNI o Pasaporte</Form.Label>
                 <Form.Control
                 onChange={e=> handleChange(e)}
                  className=' bg-gradient'
                   type="text"
                   placeholder="DNI o Passport"
                   autoFocus
                   name="personalID"
                 />
                <Form.Label>Telefono</Form.Label>
                 <Form.Control
                 onChange={e=> handleChange(e)}
                  className=' bg-gradient'
                   type="text"
                   placeholder="Telefono"
                   autoFocus
                   name='phoneNumber'
                 />
               </Form.Group>
             </Form>

           </Modal.Body>
           <Modal.Footer className=" text-white">
             <Button variant="secondary" onClick={handleClose}>
               Close
             </Button>
             <Button variant="primary" onClick={(e)=> {
               handleSubmit(e)
               handleClose()
                
                }}>
               Save Changes
             </Button>
           </Modal.Footer>
         </Modal>
        }
        {
            //CONTROL DE LA RESERVA DE LA HABITACION!


        }

        {!userLogin.isAuthenticated ? <div className="alertLog" hidden={login}>
            <div className='bg-dark text-white'>
                <button onClick={()=>setLogin(true)}>X</button>
                <p>Para poder hacer reservas debes registrarte primero</p>
            </div>
        </div> : null}
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
            <input onClick={pay} type="submit" value={cargando ? "Cargando..." : "Pagar"} />
        </div>
        {!pagar.length ? null : <div className='IframeDiv'>
        <button onClick={()=>setPagar('')}>X</button>
            <iframe className='PagarIframe' src={pagar} frameborder="0"></iframe>
        </div> }
        <br/>
        <Footer />
    </div>
 
   )
}
