import React from "react";
import { useEffect } from "react";
import  { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
// import { sendFeedback } from "../../Redux/actions";
export default function FeedBack(){
    const dispatch = useDispatch();
    const queryString = window.location.search;

    // useEffect(() =>{
    //     dispatch(sendFeedback(queryString))
    // },[dispatch])

    const naviGate = useNavigate();
    setTimeout(() =>{
        naviGate("/")
    },2000)

    return(
        <div>
            <h1>En breve recibiras una notificacion por mail</h1>
        </div>
    )
}

//DATOS Q VIENEN POR QUERY

// http://localhost:3000/feedback?
// collection_id=1310679791
// &collection_status=approved
// &payment_id=1310679791
// &status=approved
// &external_reference=null
// &payment_type=account_money
// &merchant_order_id=6445843434
// &preference_id=1230124929-a7303104-f664-4e75-9598-616dc498f4ce
// &site_id=MLA
// &processing_mode=aggregator
// &merchant_account_id=null

// 1230124929-a7303104-f664-4e75-9598-616dc498f4ce