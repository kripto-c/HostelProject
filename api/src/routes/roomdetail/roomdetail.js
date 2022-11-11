const { Router} = require('express');
const route = Router();


route.get("/", async (req, res) =>{
    res.send("detalle")
});

module.exports = route;