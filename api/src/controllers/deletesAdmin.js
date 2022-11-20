const { Review, Room } = require("../db.js");

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

const deleteRoom = async (req, res) => {
  try {
    let { id } = req.query;
    let findId = await Room.findByPk(id);
    await findId.update({ status: !Room.status });
    await findId.save();
    res.status(200).json("Habitacion eliminada");
  } catch (e) {
    res.status(400).json("No se pudo eliminar");
  }
};

// const activeRoom = async (req,res) =>{
//   try{
//     let {id} = req.query;
//     let findId = await Room.findByPk(id)
//     await findId.update({status: false});
//     await findId.save()
//     res.status(200).json("Habitacion Actualizada")
  
//   }catch(e){
//     res.status(400).json("No se pudo actualizar")
//   }
// }

module.exports = { deleteReview, deleteRoom , activeRoom};
