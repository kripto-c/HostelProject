
const { Router} = require('express');
const route = Router();
const { Rent } = require('../../db');
require('dotenv').config();

route.get("/", async (req, res) =>{
    const preference_id = req.query.preference_id;
    const payment_status = req.query.status;
    console.log(preference_id)
    if(payment_status === "approved"){
        let comprobante = await Rent.create({
           status: true,
           pago_id: preference_id
        });
        console.log(comprobante)
    }
  
    console.log("si entro al home ponele");
    res.send("reserva hecha");
  });

  module.exports = route;