const express = require("express");
const morgan = require("morgan");

const server = express();

const routes = require("./routes/index")

server.use("/", routes)

server.use(express.json());
server.use(morgan("dev"));

module.exports = server