const { Client } = require("../db");
const getAllClients = async(req, res) => {
  try {
    const clients = await Client.findAll();
    console.log(clients)
    const numberClients = clients.length;
    console.log(numberClients)
    res.status(200).json(clients)
  } catch (e) {
    res.status(400).json(e)
  }
};

module.exports = getAllClients;