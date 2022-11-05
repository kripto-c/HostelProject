const {Router} = require("express");

const router = Router();

router.get("/", async(req, res) =>{
    console.log("si")
    res.send("estamos listos!")
})
module.exports = router;

