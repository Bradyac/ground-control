require("../models/Rocket");
require("../models/Mission");
require("../models/Pad");
require("../models/Provider");
const Launch = require("../models/Launch");
const router = require("express").Router();

// Get all upcoming launches
router.get("/", async (req, res) => {
  try {
    // Server side pagination
    let { page, size, upcoming } = req.query;
    let p = page || 1;
    let s = size || 10;
    let fetchUpcoming = upcoming || true;

    // For selecting a subset of launches in the collection
    // Ex. The user is on the second page and each page shows 10 launches: page = 2, size = 10 -> selects launches from 11-20
    const limit = parseInt(s);
    const skip = (p - 1) * s;

    // Get total size of collection for client side pagination
    let collectionSize = await Launch.countDocuments();

    // 1 hour ago - Upcoming Launches = launched/failed within the past hour or will launch in the future | Past Launches = launched/failed over 1 hour ago
    const d = new Date();
    d.setHours(d.getHours() - 1);

    // Get a list of launches
    // fetch upcoming launches else fetch past launches
    let launches;
    if (fetchUpcoming === true) {
      console.log("here");
      launches = await Launch.find({ date: { $gt: d } })
        .sort({ date: 1 })
        .skip(skip)
        .limit(limit);
    } else {
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
