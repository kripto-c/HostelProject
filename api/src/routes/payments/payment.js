const { Router} = require('express');
const route = Router();
const mercadopago = require("mercadopago");
const router = require('..');
require('dotenv').config();

route.get("/", async(req,res) =>{
    let {ACCESS_TOKEN} = process.env;
    console.log(ACCESS_TOKEN)
    res.send(ACCESS_TOKEN);
});

route.post("/create_preference", async(req, res) =>{
   
    let {ACCESS_TOKEN} = process.env;
    let {title, quantity, unit_price, check_in, check_out} = req.body;
    mercadopago.configure({
        access_token: ACCESS_TOKEN
    });

    let preference = {
        items: [
            {
                title: title,
                quantity: quantity,
                unit_price: unit_price,
                description: `fecha de ingreso desde: ${check_in}, con salida el ${check_out}`
            }
        ],
        back_urls: {
			"success": "http://localhost:3000/feedback",
			"failure": "http://localhost:3000/feedback",
			"pending": "http://localhost:3000/feedback"
		},
        auto_return: "approved"

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



})

// route.get('/feedback', function (req, res) {
// 	res.json({
// 		Payment: req.query.payment_id,
// 		Status: req.query.status,
// 		MerchantOrder: req.query.merchant_order_id
// 	});
// });



module.exports = route;