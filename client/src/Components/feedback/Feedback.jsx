import React from "react";
import { useEffect } from "react";
import axios from "axios";
import  { useNavigate } from "react-router-dom"

export default function FeedBack(){


    const naviGate = useNavigate();
    setTimeout(() =>{
        naviGate("/home")
    },2000)

    return(
        <div>
            <h1>En breve recibiras una notificacion por mail</h1>
        </div>
    )
}

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