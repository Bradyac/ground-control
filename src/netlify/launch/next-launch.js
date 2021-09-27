const Launch = require("../models/Launch");
const router = require("express").Router();

router.get("/next", (req, res) => {
  Launch.find()
    .sort({ date: 1 })
    .limit(1)
    .exec((err, results) => {
      if (err) {
        res.status(400).json({
          message: "[ Error fetching the next upcoming launch: " + err,
        });
      } else if (!results.length) {
        res.status(200).json({
          message: "[ NO DATA ]: Could not find the next upcoming launch",
        });
      } else {
        res.status(200).json(results);
      }
    });
});

module.exports = router;
