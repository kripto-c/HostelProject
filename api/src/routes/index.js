const { Router } = require("express");
const express = require("express");
const login = require("./login/route");
const reviews = require("./reviews/reviews.js");
const info = require(".././routes/info/info.js")
const router = Router();
router.use("/reviews", reviews);
router.use("/info", info);
const payments = require("./payments/payment.js");

//changed sofi
// const controllers = require("../controllers/index.js")

// router.get("/", async(req, res) =>{
//     console.log("si")
//     res.send("estamos listos!");

// })
// router.get("/getrooms", (req, res) => {
//     try {
//         return controllers.getRoomInfo()
//             .then((result) => {
//                 return res.status(201).json(result)
//             })
//     } catch (error) {
//         return res.status(400).send(error)
//     }

// })
// router.post("/addrooms", (req, res) => {
//     let {beds, description, image, bathroom, price, observation, status} = req.body
//     try {
//         return controllers.postRoomInfo(beds, description, image, bathroom, price, observation, status)
//             .then(() => {
//                 return res.send("Room created")
//             })
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// auth0 backend
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const { Rent } = require("../db");


let jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-o7k6sbvjre41wvzb.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "route-protected",
  issuer: "https://dev-o7k6sbvjre41wvzb.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: ["/login"] });

// router.use(jwtCheck);

router.use(express.json());
//RUTAS----------------------------------->>

//payments

router.use("/payment", payments);

router.post("/rent", async(req, res) =>{
    const preference_id = req.query.preference_id;
    const payment_status = req.query.status;
    if(payment_status === "approved"){
        let comprobante = await Rent.create({
           status: true,
           pago_id: preference_id
        });
        res.send(comprobante)
    }
})

router.use("/login", login);

module.exports = router;


//feedback?collection_id=51359010704
// &collection_status=approved
// &payment_id=51359010704&status=approved
// &external_reference=null
// &payment_type=account_money&merchant_order_id=6444906662
// &preference_id=1230124929-ad67b343-3407-4f3f-8b97-32ccb089a264
// &site_id=MLA
// &processing_mode=aggregator
// &merchant_account_id=null