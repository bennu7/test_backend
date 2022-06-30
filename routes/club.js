const express = require("express");
const route = express.Router();
const clubController = require("../controllers/club");

route.get("/", clubController.index);
route.post("/", clubController.create);

module.exports = route;
