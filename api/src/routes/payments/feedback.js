const { Router } = require("express");
const route = Router();
const { Rent, Client, Room } = require("../../db");
require("dotenv").config();
const { sendEmail } = require("./sendEmail");

route.get("/", async (req, res) => {
  const preference_id = req.query.preference_id;
  const payment_status = req.query.status;
  console.log(req.query);
  sendEmail(req.query);
  try {
    if (payment_status === "approved") {
      let pagado = await Rent.findOne({
        where: {
          pago_id: preference_id,
        },
      });

      let room = await Room.findOne({
        where: {
          id: pagado.bed_id,
        },
      });

      let client = await Client.findOne({
        where: {
          id: pagado.client_id,
        },
      });
      console.log("entramos aca");
      room.beds = room.beds - pagado.observation;
      if (room.beds <= 0) {
        room.beds = 0;
        room.status = true;
      }
      console.log("cliente",client)
      console.log("factura",pagado)
      client.addRent(pagado);
      pagado.addRoom(room);
      await room.save();

      res.send("bien");
    } else {
      res.send("nada");
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = route;

//1230124929-db7715de-2094-4c32-8653-1408ba6e9e9f
//230124929-db7715de-2094-4c32-8653-1408ba6e9e9f
