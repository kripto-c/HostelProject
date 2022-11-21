import React from "react";
import { useEffect } from "react";
import  { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { sendFeedback } from "../../Redux/actions";
import s from "./feedback.module.css"
export default function FeedBack(){
    const dispatch = useDispatch();
    const queryString = window.location.search;
    const naviGate = useNavigate();

    useEffect(() =>{

        dispatch(sendFeedback(queryString))
    },[dispatch]);
console.log(queryString);

const params = new URLSearchParams(queryString);
const email = params.get("email");
const name = params.get("name");
const check_in = params.get("check_in");
const check_out = params.get("check_out");
const camas = params.get("camas")
console.log(email);

    return(
        <div  style={{margin: "2%"}}>
            <div className={s.bgWhites}>

                <h1 className="tittle" >Detalles de su reserva</h1>
                <p className="blockquote">
                    Hola {name}:
                        Haz hecho una reserva en Dinamita Hostel con fecha de ingreso el {check_in}, 
                        con salida el {check_out}, con {camas > 1 ? camas + " camas": camas + " cama"}.
                       <br></br>
                        Pronto recibira un comprobante de pago al correo registrado.
                            Saludos!
                </p>
            </div>
            <Link style={{ textDecoration: 'none' }} to={`/`}>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">Inicio</button>
            </div>
            </Link>
        </div>
    )
}

//DATOS Q VIENEN POR QUERY
// http://localhost:3000/feedback/?
// email=lucianocar12300@gmail.com
// &&check_in=18-11-2022
// &&check_out=19-11-2022
// &&dni=42269432
// &&name=luciano
// &&lastname=undefined
// &&camas=1
// &collection_id=51604473721
// &collection_status=approved
// &payment_id=51604473721&status=approved
// &external_reference=null
// &payment_type=account_money
// &merchant_order_id=6527504188
// &preference_id=1230124929-75017515-7bac-4445-bdc9-8c102186f547
// &site_id=MLA&processing_mode=aggregator
// &merchant_account_id=null

// 1230124929-a7303104-f664-4e75-9598-616dc498f4ce

//http://localhost:3000/feedback/?email=lucianocar12300@gmail.com&&check_in=18-11-2022&&check_out=19-11-2022&&dni=42269432%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&&name=luciano&&lastname=undefined&&camas=1&collection_id=51604473721&collection_status=approved&payment_id=51604473721&status=approved&external_reference=null&payment_type=account_money&merchant_order_id=6527504188&preference_id=1230124929-75017515-7bac-4445-bdc9-8c102186f547&site_id=MLA&processing_mode=aggregator&merchant_account_id=null