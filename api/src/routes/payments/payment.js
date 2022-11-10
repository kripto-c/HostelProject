const { Router} = require('express');
const route = Router();
const mercadopago = require("mercadopago");
require('dotenv').config();


route.post("/", async(req, res, next) =>{

    let ACCESS_TOKEN = "TEST-3953691119722438-110705-5a73c90c16e5a96a9e786f5d1bdb5ccd-1230124929";
    let items = req.body.items;
    let user = req.body.user;
    user.identification.number = toString(user.identification.number);
    console.log(items)
    console.log(user)
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
});


module.exports = route;