const { Router } = require("express");
const express = require("express");
const login = require("./login/route");
const reviews = require("./reviews/reviews.js");
const info = require(".././routes/info/info.js")

const rooms = require("../routes/rooms/index.js")

const payment = require("./payments/payment");
const feedback = require("./payments/feedback")

const router = Router();
//------Dejo esto aca porque mas abajo me tira error de authenticacion!!!!NO BORREN--->
router.use("/info", info)
router.use("/reviews",reviews)
router.use("/rooms", rooms)
//----------------------------------------------------------------------------------
// auth0 backend
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

// router.get("/", async(req, res) =>{
//     console.log("si")
//     res.send("estamos listos!");


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


router.use("/login", login);
router.use("/payment", payment);
router.use("/feedback", feedback);

module.exports = router;
