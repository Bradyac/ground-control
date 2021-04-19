const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaunchSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
  },
  status: {
    type: Number,
  },
  date: {
    type: String,
  },
  image_url: {
    type: String,
  },
  watch_url: {
    type: String,
  },
  rocket: { type: Schema.Types.ObjectId, ref: "Rockets" },
  mission: { type: Schema.Types.ObjectId, ref: "Missions" },
  pad: { type: Schema.Types.ObjectId, ref: "Pads" },
  provider: { type: Schema.Types.ObjectId, ref: "Providers" },
});

module.exports = mongoose.model("Launches", LaunchSchema);
