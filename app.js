const express = require("express");
const morgan = require("morgan");
const app = express();
const route = require("./routes");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
require("./utils/db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", route);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
