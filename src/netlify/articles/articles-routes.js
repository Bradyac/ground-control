const Article = require("../models/Article");
const router = require("express").Router();

router.get("/", (req, res) => {
  Article.find({})
    .sort({ published_date: -1 })
    .exec((err, results) => {
      if (err) {
        res.status(400).json({
          message: "[ Error fetching articles ]: " + err,
        });
      } else if (!results.length) {
        res.status(200).json({
          message: "[ NO DATA ]: There are no articles!",
        });
      } else {
        res.status(200).json(results);
      }
    });
});

module.exports = router;
