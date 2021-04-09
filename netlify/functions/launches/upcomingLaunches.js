import UpcomingLaunch from "./UpcomingLaunch";
import { Router } from "express";
const router = Router();

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

export default router;
