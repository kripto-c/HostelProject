const {Router} = require("express");
const controllers = require("../controllers/index.js")

const router = Router();

router.get("/", async(req, res) =>{
    console.log("si")
    res.send("estamos listos!");

})
router.get("/getrooms", (req, res) => {
    try {
        return controllers.getRoomInfo()
            .then((result) => {
                return res.status(201).json(result)
            })
    } catch (error) {
        return res.status(400).send(error)
    }
    
})
router.post("/addrooms", (req, res) => {
    let {beds, description, image, bathroom, price, observation, status} = req.body
    try {
        return controllers.postRoomInfo(beds, description, image, bathroom, price, observation, status)
            .then(() => {
                return res.send("Room created")
            })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;

