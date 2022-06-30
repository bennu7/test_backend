const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const Club = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Club || mongoose.model("Club", Club);
