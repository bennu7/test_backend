const express = require("express");
const route = express.Router();
const competitionController = require("../controllers/competition");

route.get("/", competitionController.index);
route.post("/", competitionController.create);

module.exports = route;
