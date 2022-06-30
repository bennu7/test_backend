const express = require("express");
const route = express.Router();
const clasementRoute = require("./clasement");
const competitionRoute = require("./competition");
const clubRoute = require("./club");

route.use("/clasement", clasementRoute);
route.use("/competition", competitionRoute);
route.use("/club", clubRoute);

module.exports = route;
