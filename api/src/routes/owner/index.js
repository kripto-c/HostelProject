const {Router} = require("express");
const router = Router();
const controllers = require("../../controllers/index")

router.post("/post", async (req, res) => {
    try {
        return controllers.postOwner(req.body)
            .then((result) => {
                return res.status(201).json(result)
            })
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/get", (req, res) => {
    try {
        return controllers.getOwner()
            .then((result) => {
                return res.status(201).json(result)
            })
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports = router;