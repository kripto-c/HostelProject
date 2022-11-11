const { Router} = require('express');
const route = Router();
const mercadopago = require("mercadopago");
require('dotenv').config();
const {Room, Rent} = require("../../db");

route.post("/", async(req, res, next) =>{

    let ACCESS_TOKEN = "TEST-3953691119722438-110705-5a73c90c16e5a96a9e786f5d1bdb5ccd-1230124929";
    let items = req.body.items;
    let user = req.body.user;
    try {
        //MANEJO DE ERRORES
        if(!items[0].title) return res.status(400).send("Debe tener titulo");  
        if(!items[0].quantity) return res.status(400).send("Debe tener alguna cantidad");
        if(!items[0].unit_price) return res.status(400).send("Debe tener precio");
        if(!items[0].room_id) return res.status(400).send("Debe traer el id de la habitacion");
        if(items[0].check_in === "0" || items[0].check_out === "0") return res.status(400).send("Debe tener fecha tanto de ingreso como de salida");

        user.identification.number = toString(user.identification.number);
        // console.log(user)
        
        mercadopago.configure({
            access_token: ACCESS_TOKEN
        });
    
        let preference = {
            items: items,
    
            back_urls: {
                success: "http://localhost:3000/feedback",
                failure: "http://localhost:3000/feedback",
                pending: "http://localhost:3000/feedback"
            },
            payer: user,
    
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
    } catch (error) {
        console.log(error)
    }
});


module.exports = route;