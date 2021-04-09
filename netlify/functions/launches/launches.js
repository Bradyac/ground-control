"use strict";
const mongoose = require("mongoose");
const express = require("express");
const serverless = require("serverless-http");
const app = express();

// DB connection
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const UpcomingLaunchesRoute = require("./upcomingLaunches");

// Middleware
app.use(express.json());
app.use("/.netlify/functions/launches", UpcomingLaunchesRoute);

module.exports = app;
module.exports.handler = serverless(app);
