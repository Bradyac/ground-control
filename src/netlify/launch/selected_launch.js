require("../models/Rocket");
require("../models/Mission");
require("../models/Pad");
require("../models/Provider");
const Launch = require("../models/Launch");
const router = require("express").Router();

router.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  Launch.find({ slug: slug })
    .populate("rocket")
    .populate("mission")
    .populate("pad")
    .populate("provider")
    .exec((err, results) => {
      if (err) {
        res.status(400).json({
          message: "[ Error fetching upcomingLaunch ]: " + err,
        });
      } else if (!results.length) {
        res.status(200).json({
          message: "[ NO DATA ]: No data found for launch: " + slug,
        });
      } else {
        res.status(200).json(results);
      }
    });
});

module.exports = router;
