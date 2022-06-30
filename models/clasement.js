const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const Clasement = new Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Clasement || mongoose.model("Clasement", Clasement);
