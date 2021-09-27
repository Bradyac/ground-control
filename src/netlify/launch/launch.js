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

// Routes
const NextLaunchRoute = require("./next_launch");
const SelectedLaunchRoute = require("./selected_launch");

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/.netlify/functions/launch", NextLaunchRoute);
app.use("/.netlify/functions/launch", SelectedLaunchRoute);

module.exports = app;
module.exports.handler = serverless(app);
