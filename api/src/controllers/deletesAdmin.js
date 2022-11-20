const { Review } = require("../db.js");

const deleteReview = async (req, res) => {
  try {
    let { id } = req.query;
    console.log("ESTE ID", id);
    let findId = await Review.findByPk(id);
    await findId.update({ status: true });
    // console.log(findId)
    // findId.status = true;
    await findId.save();
    // await Review.destroy({where:{id}})
    res.status(200).json("Review Eliminado logico");
  } catch (e) {
    res.status(400).json("No se pudo eliminar");
  }
};

module.exports = { deleteReview };
