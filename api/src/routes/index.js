const { Router } = require("express");
const axios = require("axios")
const express = require("express");
const login = require("./login/route");
const rol = require('./rol/route')
const reviews = require("./reviews/reviews.js");
const info = require(".././routes/info/info.js")
const getAllClients = require("../routes/getAllClients/getAllClients.js")
const rooms = require("../routes/rooms/index.js")
const roomdetail = require("./roomdetail/roomdetail")
const payment = require("./payments/payment");
const feedback = require("./payments/feedback")
const getCountries = require("./countries")
const owner = require("./owner")
const rent = require("./rent/rent")
const router = Router();
/////////////permissos
const checkPermissions  = require("../permisos/permisosCheck");
const itemPermissos = require('../permisos/permisos')
//----------------------------------------------------------------------------------
// auth0 backend
const jwtCheck = require('../jwtCheck/jwtCheck');

router.use(jwtCheck);

router.use(express.json());
//RUTAS----------------------------------->>

router.use("/rol", rol); 
router.use("/login", checkPermissions(itemPermissos.clientRoute),login);
router.use("/payment", checkPermissions(itemPermissos.payment),payment);
router.use("/owner",checkPermissions(itemPermissos.addDataAdmin), owner);
router.use("/feedback", feedback);
router.use(`/getroomdetail`, roomdetail);//------Dejo esto aca porque mas abajo me tira error de authenticacion!!!!NO BORREN--->
router.use("/info", info);
router.use("/reviews",reviews);
router.use("/rooms", rooms);
router.use("/countries", getCountries)
router.use("/owner",checkPermissions(itemPermissos.addDataAdmin),owner)
router.use("/allClients",getAllClients)

module.exports = router;
