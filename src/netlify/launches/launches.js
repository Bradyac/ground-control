"use strict";
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const app = express();

// DB connection
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
const UpcomingLaunchesRoute = require("./upcomingLaunches");
app.use("/.netlify/functions/launches", UpcomingLaunchesRoute);

module.exports = app;
module.exports.handler = serverless(app);
