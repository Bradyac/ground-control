import { Schema, model } from "mongoose";

const UpcomingLaunchSchema = Schema({
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

export default model("UpcomingLaunches", UpcomingLaunchSchema);
