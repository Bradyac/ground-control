require("../models/Rocket");
require("../models/Mission");
require("../models/Pad");
require("../models/Provider");
const Launch = require("../models/Launch");
const router = require("express").Router();

// Get all upcoming launches
router.get("/", (req, res) => {
  Launch.find({}, (err, results) => {
    if (err) {
      res.status(400).json({
        message: "[ Error fetching upcomingLaunches ]: " + err,
      });
    } else if (!results.length) {
      res.status(200).json({
        message: "[ NO DATA ]: There are no upcoming launches!",
      });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
