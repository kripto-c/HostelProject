const { Router } = require("express");
const express = require("express");
const login = require("./login/route");
const reviews = require("./reviews/reviews.js");
const info = require(".././routes/info/info.js")

const rooms = require("../routes/rooms/index.js")
const roomdetail = require("./roomdetail/roomdetail")
const payment = require("./payments/payment");
const feedback = require("./payments/feedback")
const getCountries = require("./countries")

const router = Router();

/////////////permissos
const checkPermissions  = require("../permisos/permisosCheck");
const itemPermissos = require('../permisos/permisos')
//----------------------------------------------------------------------------------
// auth0 backend
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");


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
}).unless({ path: ["/getroomdetail", "/info", "/rooms", '/reviews','/countries',"/feedback"] });

router.use(jwtCheck);

router.use(express.json());
//RUTAS----------------------------------->>



router.use("/login", login);
router.use("/payment", payment);
router.use("/feedback", feedback);
router.use(`/getroomdetail`, roomdetail);//------Dejo esto aca porque mas abajo me tira error de authenticacion!!!!NO BORREN--->
router.use("/info", info)
router.use("/reviews",reviews)
router.use("/rooms", rooms)
router.use("/countries", getCountries)

module.exports = router;
