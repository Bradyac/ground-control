const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PadSchema = Schema({
  _id: Schema.Types.ObjectId,
  location_name: {
    type: String,
  },
  wiki_url: {
    type: String,
  },
  map_url: {
    type: String,
  },
  map_image_url: {
    type: String,
  },
});

module.exports = mongoose.model("Pads", PadSchema);
