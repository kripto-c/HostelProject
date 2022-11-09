const data = require("../Info Hostel/data.js");
const { Client } = require("../db.js");

const loadInfoHostel = async (req, res) => {
  //Cargar Clientes
  try {
    infoDB = await Client.findAll()
    if(infoDB){
        const clientes = data.map((e) => e.client).flat();
    const dataDb = Client.bulkCreate(clientes);
    res.status(400).json(dataDb);
    }
    
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports={loadInfoHostel}