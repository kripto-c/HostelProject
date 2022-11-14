import React from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import style from './style.module.css'
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from "react-redux";
import { getCLient, postClient,getAllCountries } from "../../Redux/actions";
import { BsFillPencilFill } from "react-icons/bs";

export default function ClientEdit() {
    const info = useSelector(state => state.client);
    const dispatch = useDispatch();
    const { getAccessTokenSilently } = useAuth0();
    const [namec, setName] = useState(true)
    const [lastname, setLastname] = useState(true);
    const [personalId, setPersonalid] = useState(true);
    const [provin, setProvin] = useState(true);
    const [phone, setPhone] = useState(true);
    const [client,setClient ]= useState({})
    const [errors, setErrors] = useState({})
    // const [client, setClient] = useState({
    //     name: "",
    //     lastname: "",
    //     personalID: "",
    //     nationality: "",
    //     phoneNumber: "",
    // })

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    const countries = useSelector(state => state.countries)

    function handleChange(e) {
        e.preventDefault()
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...client,
            [e.target.name]: e.target.value
        }))
    }
    function validate() {
                
    }
    function validateDni(campo){
        var regExpDni = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/
        if ((campo.match(regExpDni)) && (campo !=='')){
            return true
        }else return false
    }
    function validateDniLength(e){
        let key = e.keyCode || e.which;
        if (e.target.value.length >= 10){
            if (key !== 8) e.preventDefault();     
        }
    }
    function notNumbers(e){
        let key = e.keyCode || e.which;
    
        if ( key === 48 || key === 49 || key === 50 || key === 51 || key === 52 
            || key === 53 || key === 54 || key === 55 || key === 56 || key === 57 ) {                 
           e.preventDefault();     
        }

         if (e.target.value.length >= 20){
             if (key !== 8) e.preventDefault();     
         }
    }
    function handleName(e) {
        e.preventDefault()
        setName(!namec);
    }

    function handleLastName(e) {
        e.preventDefault()
        setLastname(!lastname);
    }

    function handlePersID(e) {
        e.preventDefault()
        setPersonalid(!personalId);
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
        if (personalId){
            if (!client.personalID) alert('Falta DNI')
            if (!validateDni(client.personalID)) alert('Esta mal cargado el numero')
        }        
        // alert('ok')

        const token = await getAccessTokenSilently();
        const authorization = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        dispatch(postClient(info.email, client, authorization))
        setClient({})
        dispatch(getCLient(info.email))
        setName(true);
        setLastname(true);
        setPersonalid(true)
        setPhone(true)
        setProvin(true)
    }
    // function handleNationality(e) {
    //     setInput({
    //         ...client,
    //         countrieId: [...client.tempers, e.target.value]
    //     })
    // }
    return (
        <div className={`${style.bgWhites} container my-4`} >
            <form className="row g-3 needs-validation" onSubmit={e => handleSubmit(e)} >
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <div className="input-group">
                        <input type="text" className="form-control"
                            name='name' id="validationCustom01" disabled={namec}
                            value={info.name}
                            onKeyDown ={e=> notNumbers(e)}
                            onChange={e => handleChange(e)} required />
                        <button key={'btnNamec'} name='sasa' className="btn btn-outline-danger" type='button'
                            onClick={e => handleName(e)}><BsFillPencilFill /></button>
                    </div>

                    <div className="valid-feedback">
                        ¡Se ve bien!
                    </div>
                    <div className="invalid-feedback">
                        coloque el nombre
                    </div>

                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="validationCustom02"
                            name='lastname' disabled={lastname}
                            value={info.lastname}
                            onKeyDown ={e=> notNumbers(e)}
                            onChange={e => handleChange(e)} required />
                        <button key={'btnLastName'} className="btn btn-outline-danger" type='button'
                            onClick={e => handleLastName(e)}><BsFillPencilFill /></button>
                    </div>
                    <div className="valid-feedback">
                        ¡Se ve bien!
                    </div>
                </div>
                
                <div className="col-md-12">
                
                    <select className="form-select" aria-label="Default select example"
                    name='countrieId'
                    onChange={e=>handleChange(e)}>
                    {countries?.map((coun) => {
                            return (<option key ={coun.id} 
                                value = {coun.id}> {coun.country} </option>)
                        })}
                    </select>
                </div>

                <div className="col-md-12">
                    <label htmlFor="validationCustom03" className="form-label">Provincia</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="validationCustom03" 
                        name="nationality" disabled={provin} 
                        onChange={e => handleChange(e)} 
                        value={info.nationality } required />
                        <button key={'btnNamesc'} className="btn btn-outline-danger" type='button' 
                        onClick={e => handleProvin(e)}><BsFillPencilFill /></button>
                    </div>
                    <div className="invalid-feedback">
                        Por favor indique su Provincia
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">DNI</label>
                    <div className="input-group">
                        <input type={personalId ? "text":"number"} className="form-control" id="validationCustom05"
                            name='personalID' disabled={personalId}
                            value={info.personalID }
                            onKeyDown ={e=>validateDniLength(e)}
                            onChange={e => handleChange(e)} required />
                        <button className="btn btn-outline-danger" type='button'
                            onClick={e => handlePersID(e)}><BsFillPencilFill /></button>
                    </div>
                    <div className="invalid-feedback">
                        Por favor coloque su numero de documento.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Telefono</label>
                    <div className="input-group">
                        <input type={phone ? "text" : "number"} className="form-control" id="validationCustom05" 
                        name='phoneNumber' disabled={phone} 
                        value={info.phoneNumber } 
                        onChange={e => handleChange(e)} required />
                        <button key={'btnNamedsadac'} className="btn btn-outline-danger" type='button' 
                        onClick={e => handlePhone(e)}><BsFillPencilFill /></button>
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