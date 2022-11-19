const { Router } = require("express");
const {postReviews, getReviews,deleteReview} = require("../../controllers/reviews.js");
const router = Router();
router.get("/", getReviews);
router.post("/", postReviews);
router.put("/:id",deleteReview)

module.exports = router;
