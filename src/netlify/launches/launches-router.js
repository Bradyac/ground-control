require("../models/Rocket");
require("../models/Mission");
require("../models/Pad");
require("../models/Provider");
const Launch = require("../models/Launch");
const router = require("express").Router();

// Get launches
/* upcoming: { true: fetch upcoming launches} || { false: fetch previous launches }
   A launch is considered upcoming if it has launched within the past hour or will launch in the future
*/
/*
  Server side pagination
  p (page): This number represents the current page the user is on
  s (size):
*/

router.get("/", async (req, res) => {
  try {
    // Server side pagination
    let { page, size, upcoming } = req.query;
    let p = page || 1;
    let s = size || 5;
    let fetchUpcoming = upcoming || "true";

    // For selecting a subset of launches in the collection
    // Ex. The user is on the second page and each page shows 10 launches: page = 2, size = 10 -> selects launches from 11-20
    const limit = parseInt(s);
    const skip = (p - 1) * s;

    // 1 hour ago - Upcoming Launches = launched/failed within the past hour or will launch in the future | Past Launches = launched/failed over 1 hour ago
    const d = new Date();
    d.setHours(d.getHours() - 1);

    // Get total size of collection so we can know when to stop infinite scroll on the client side
    let collectionSize;

    // Get a list of launches
    // fetch upcoming launches else fetch past launches
    let launches;
    if (fetchUpcoming === "true") {
      collectionSize = await Launch.find({
        date: { $gt: d },
      }).countDocuments();

      launches = await Launch.find({ date: { $gt: d } })
        .sort({ date: 1 })
        .skip(skip)
        .limit(limit);
    } else {
      collectionSize = await Launch.find({
        date: { $lte: d },
      }).countDocuments();

      launches = await Launch.find({ date: { $lte: d } })
        .sort({ date: 1 })
        .skip(skip)
        .limit(limit);
    }

    res.send({
      collectionSize,
      launches,
    });
  } catch (error) {
    res.sendStatus(500).send("[ Error fetching launches ]: \n" + error.message);
  }
});

module.exports = router;
