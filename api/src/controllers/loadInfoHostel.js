const data = require("../Info Hostel/data.js");
const { Room, Rent, Client } = require("../db.js");

const loadInfoHostel = async (req, res) => {
  //Cargar Clientes
  try {
    let infoDB = await Client.findAll();
    let infoDbRent = await Rent.findAll();
    let infoDbRoom = await Room.findAll();
    if(!infoDB.length || !infoDbRent.length || !infoDbRoom.length){
        if (!infoDB.length) {
            let clientes = data.map((e) => e.client).flat();
            let dataClient = await Client.bulkCreate(clientes);
            
          } 
          if(!infoDbRent.length){
              let rent = data.map(e=>e.rent).flat();
              let dataRent = await Rent.bulkCreate(rent)
          }
          if(!infoDbRoom.length){
              let room = data.map(e=>e.room).flat()
              let dataRoom = await Room.bulkCreate(room)
          }
          return res.status(200).json("Base de datos CREADA!")

    }
    
    return res.status(200).json("Base de datos completa")
  } catch (e) {
    res.status(400).json(e);
  }
};


module.exports = { loadInfoHostel };
