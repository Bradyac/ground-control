const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaunchSchema = Schema({
  _id: String,
  name: {
    type: String,
  },
  status: {
    type: Number,
  },
  date: {
    type: String,
  },
  slug: {
    type: String,
  },
  image_url: {
    type: String,
  },
  watch_url: {
    type: String,
  },
  rocket: { type: Number, ref: "Rockets" },
  mission: { type: Number, ref: "Missions" },
  pad: { type: Number, ref: "Pads" },
  provider: { type: Number, ref: "Providers" },
});

module.exports = mongoose.model("Launches", LaunchSchema);
