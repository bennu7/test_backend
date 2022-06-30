const express = require("express");
const route = express.Router();
const clasementController = require("../controllers/clasement");

route.get("/", clasementController.index);
route.post("/", clasementController.create);

module.exports = route;
