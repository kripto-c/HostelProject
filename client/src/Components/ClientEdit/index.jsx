import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.css'
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from "react-redux";
import { getCLient, postClient } from "../../Redux/actions";
import { BsFillPencilFill } from "react-icons/bs";

export default function ClientEdit() {
    const info =  useSelector(state=> state.client);
    const dispatch = useDispatch();
    const { getAccessTokenSilently } = useAuth0();
    const [name, setName ] = useState(true)
    const [lastname, setLastname] =useState(true);
    const [ personalid, setPersonalid ] = useState(true);
    const [ provin, setProvin ] = useState(true);
    const [phone, setPhone] = useState(true);
    const [client,setClient ]= useState({})
    
    // name:"",
    // lastname:"",
    // personalID:"",
    // nationality:"",
    // phoneNumber:"",

    function handleChange(e) {
        setClient({
           ...client, [e.target.name]: e.target.value
        })
   }
   function handleName(e) {
       e.preventDefault()
       setName(!name);
   }

   function handleLastName(e) {
    e.preventDefault()
    setLastname(!lastname);
}

 function handlePersID(e) {
    e.preventDefault()
    setPersonalid(!personalid);
 }

 function handleProvin(e) {
     e.preventDefault();
      setProvin(!provin);
 }

 function handlePhone(e) {
     e.preventDefault()
     setPhone(!phone)
 }

     async function handleSubmit(e) {
         e.preventDefault()
         const token = await getAccessTokenSilently();
         const authorization  =  {headers:{
            authorization:`Bearer ${token}`
         }
        } 
         await dispatch(postClient(info.email, client, authorization))
         setClient({})
         await dispatch(getCLient(info.email))
         setName(true);
         setLastname(true);
         setPersonalid(true)
         setPhone(true)
         setProvin(true)
     } 

    return (
        <div className={`${style.bgWhites} container my-4`} >
            <form className="row g-3 needs-validation" onSubmit={e=> handleSubmit(e)} >
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                  <div className="input-group">
                  <input type="text" className="form-control" name='name' id="validationCustom01" disabled={name} value={name ? info.name : client.name }  onChange={e=> handleChange(e)} required />
                  <button className="btn btn-outline-danger" type='button' onClick={e => handleName(e)}><BsFillPencilFill /></button>
                  </div>
                        <div className="valid-feedback">
                            ¡Se ve bien!
                        </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                <div className="input-group">
                <input type="text" className="form-control" id="validationCustom02" name='lastname' disabled={lastname} value={lastname ? info.lastname : client.lastname}  onChange={e=> handleChange(e)} required />
                <button className="btn btn-outline-danger" type='button' onClick={e =>handleLastName(e)}><BsFillPencilFill /></button>
                </div>
                        <div className="valid-feedback">
                            ¡Se ve bien!
                        </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustom03" className="form-label">Provincia</label>
                  <div className="input-group">
                  <input type="text" className="form-control" id="validationCustom03" name="nationality" onChange={e=> handleChange(e)} value={ provin ? info.nationality : client.nationality} disabled={provin} required />
                  <button className="btn btn-outline-danger" type='button' onClick={e =>handleProvin(e)}><BsFillPencilFill /></button>
                  </div>
                        <div className="invalid-feedback">
                            Por favor indique su Provincia
                        </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">DNI</label>
                    <div className="input-group">
                    <input type="text" className="form-control" id="validationCustom05" name='personalID' value={personalid ? info.personalID :client.personalID }  onChange={e=> handleChange(e)} disabled={personalid} required />
                    <button className="btn btn-outline-danger" type='button' onClick={e =>handlePersID(e)}><BsFillPencilFill /></button>
                    </div>
                    <div className="invalid-feedback">
                        Por favor coloque su numero de documento.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Telefono</label>
                    <div className="input-group">
                    <input type="text" className="form-control" id="validationCustom05" name='phoneNumber' value={phone ? info.phoneNumber :client.phoneNumber}  onChange={e=> handleChange(e)} disabled={phone} required />
                    <button className="btn btn-outline-danger" type='button' onClick={e =>handlePhone(e)}><BsFillPencilFill /></button>
                    </div>
                        <div className="invalid-feedback">
                            Por favor coloque su numero de telefono.
                        </div>
                </div>
                <div className="d-grid gap-2 my-4" >
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    )
}