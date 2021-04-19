require("./models/Rocket");
require("./models/Mission");
require("./models/Pad");
require("./models/Provider");
const Launch = require("./models/Launch");
const express = require("express");
const router = express.Router();

// Get all upcoming launches
router.get("/", (req, res) => {
  Launch.find({}, (err, results) => {
    if (err) {
      res.status(400).json({
        message: "[ Error fetching upcomingLaunches ]: " + err,
      });
    }
    if (!results.length) {
      res
        .status(200)
        .json({ message: "[ NO DATA ]: There are no upcoming launches!" });
    } else {
      res.status(200).json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  const launchId = req.params.id;
  Launch.find({ _id: launchId })
    .populate("rocket")
    .populate("mission")
    .populate("pad")
    .populate("provider")
    .exec((err, results) => {
      if (err) {
        res.status(400).json({
          message: "[ Error fetching upcomingLaunch ]: " + err,
        });
      }
      if (!results.length) {
        res.status(200).json({
          message: "[ NO DATA ]: No data found for launch ID " + launchId,
        });
      } else {
        res.status(200).json(results);
      }
    });
});

module.exports = router;
