const mongoose = require("mongoose");

const UpcomingLaunchSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UpcomingLaunches", UpcomingLaunchSchema);
