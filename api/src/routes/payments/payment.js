const { Router} = require('express');
const route = Router();
const mercadopago = require("mercadopago");
const router = require('..');
const { Rent } = require('../../db');
require('dotenv').config();

// route.get('/', (req, res, next)=>{
//     res.send('APP_USR-3953691119722438-110705-8aa9c78385a42cb1b8a52623939155f8-1230124929');
//     next();
//   });
route.post("/", async(req, res, next) =>{

    let ACCESS_TOKEN = "TEST-3953691119722438-110705-5a73c90c16e5a96a9e786f5d1bdb5ccd-1230124929";
    // let {title, quantity, unit_price, check_in, check_out} = req.body;
    // let {name, surname, email, identification} = req.body;
    let items = req.body.items;
    console.log(items)

    // console.log(title)
    mercadopago.configure({
        access_token: ACCESS_TOKEN
    });

    let preference = {
        items: items
        //  [
        //     {
        //         title: title,
        //         quantity: quantity,
        //         unit_price: unit_price,
        //         description: `fecha de ingreso desde: ${check_in}, con salida el ${check_out}`
        //     }
        // ]
        ,
        back_urls: {
			success: "http://localhost:3000/feedback",
			failure: "http://localhost:3000/feedback",
			pending: "http://localhost:3000/feedback"
		},
        // payer: {
        //     name: name,
        //     surname: surname,
        //     email: email,
        //     identification: identification
        // },
        auto_return: "all"

    }

    try {
        const response = await mercadopago.preferences.create(preference);
        const responds = {
            id: response.body.id,
            init: response.body.init_point
        }
        res.send(responds);

    } catch (error) {
        console.log(error);
    }
    next();
});
route.get("/feedback", async (req, res) =>{
    const preference_id = req.query.preference_id;
    const payment_status = req.query.status;
    if(payment_status === "approved"){
        let comprobante = await Rent.create({
           status: true,
           pago_id: preference_id
        });
        console.log(comprobante)
    }

    console.log("si entro al home ponele");
    res.redirect("http://localhost:3000/home");
});

module.exports = route;