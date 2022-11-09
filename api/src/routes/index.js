const {Router} = require("express");
const express = require('express');
const login = require('./login/route');
const reviews = require("./reviews/reviews.js")
const router = Router();
    

router.use("/reviews",reviews)
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
const {  expressjwt : jwt  }  =  require ( "express-jwt" )
const jwks = require('jwks-rsa');

// router.get("/", async(req, res) =>{
//     console.log("si")
//     res.send("estamos listos!");

// })

let jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-o7k6sbvjre41wvzb.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'route-protected',
  issuer: 'https://dev-o7k6sbvjre41wvzb.us.auth0.com/',
  algorithms: ['RS256']
  }).unless({ path:['/login']});
  
router.use(jwtCheck);

router.use(express.json());
//RUTAS----------------------------------->>

router.use('/login', login);



module.exports = router;

