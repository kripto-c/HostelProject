const { Router } = require("express");
const { deleteReview } = require("../../controllers/deletesAdmin");
const router = Router();

router.get("/deleteReview", deleteReview);

module.exports = router;
