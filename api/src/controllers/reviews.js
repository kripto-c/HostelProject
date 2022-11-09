const { Review } = require("../db.js");
const postReviews = async (req, res) => {
  try {
    console.log(Review);
    let { rating, description } = req.body;
    const data = await Review.create({
      rating,
      description,
      
    });
    console.log(data);
    res.status(200).json(data);
  } catch (e) {
    res.json(e);
  }
};

const getReviews = async (req, res) => {
  try {
    const data = await Review.findAll();
    console.log(data);
    res.json(data);
  } catch (e) {
    res.status(400).json(e);
  }
};
module.exports = { postReviews, getReviews };
