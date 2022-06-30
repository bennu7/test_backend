const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const Competition = new Schema({
  home: {
    type: String,
    required: true,
  },
  away: {
    type: String,
    required: true,
  },
  resultHome: {
    type: Number,
    required: true,
  },
  resultAway: {
    type: Number,
    required: true,
  },
});

module.exports =
  mongoose.models.Competition || mongoose.model("Competition", Competition);
