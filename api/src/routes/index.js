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
//const postOwner = require ("./owner")
const owner = require("./owner")
const rent = require("./rent/rent")
const router = Router();
const axios = require("axios");
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
}).unless({ path: ["/getroomdetail", "/info", "/rooms", '/reviews','/countries',"/feedback", "/rent"] });

// router.use(jwtCheck);

router.use(express.json());
//RUTAS----------------------------------->>

//router.use("/login", checkPermissions(itemPermissos.clientRoute),login);
router.get("/", async(req, res) =>{
    try {
        const accesToken = req.headers.authorization.split(' ')[1];
          const responds = await axios.get('https://dev-o7k6sbvjre41wvzb.us.auth0.com/userinfo', {
             headers:{authorization:`Bearer ${accesToken}`}
           });
           const userinfo = responds.data;
           res.json({rol: userinfo.rol});
    } catch (error) {
        console.log(error);
    }
})
router.use("/login",login);
router.use("/payment", checkPermissions(itemPermissos.payment),payment);
router.use("/feedback", feedback);
router.use(`/getroomdetail`, roomdetail);//------Dejo esto aca porque mas abajo me tira error de authenticacion!!!!NO BORREN--->
router.use("/info", info);
router.use("/reviews",reviews);
router.use("/rooms", rooms);
router.use("/countries", getCountries)
router.use("/owner",owner)
router.use("/rent",rent)

module.exports = router;
