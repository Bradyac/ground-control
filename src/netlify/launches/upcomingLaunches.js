const UpcomingLaunch = require("./UpcomingLaunch");
const express = require("express");
const router = express.Router();

// Get all upcoming launches
router.get("/", (req, res) => {
  UpcomingLaunch.find({}, (err, results) => {
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

module.exports = router;