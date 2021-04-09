"use strict";
import { connect } from "mongoose";
import express, { json } from "express";
import serverless from "serverless-http";
const app = express();

// DB connection
connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
import UpcomingLaunchesRoute from "./upcomingLaunches";

// Middleware
app.use(json());
app.use("/.netlify/functions/launches", UpcomingLaunchesRoute);

export default app;
export const handler = serverless(app);
