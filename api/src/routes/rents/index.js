const {Router} = require("express");
const router = Router();
const controllers = require("../../controllers/index.js")
 
router.get("/", (req, res) => {
    try {
        return controllers.getRentsInfo()
            .then((result) => {
                return res.status(200).json(result)
            })
    } catch (error) {
        return res.status(400).send(error)
    }
})
/* router.put("/:id", (req, res) => {
    const {id} = req.params
    try {
        return controllers.updateRent(id)
            .then((result) => {
                return res.status(200).send("Status actualizado con éxito.")
            })
    } catch (error) {
        return res.status(400).send(error)
    }
}) */
 
module.exports = router;
