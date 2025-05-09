const express = require("express");
const mapcontroller = require("../controllers/maps.controller");
const authMiddleware = require("../middleware/user.middleware");
const { query } = require("express-validator");

const router = express.Router();
router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapcontroller.getCoordinates
);
router.get(
  "/get-distance-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapcontroller.getDistanceTime
);

router.get(
  "/get-autocomplete-suggestions",
  query("input").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapcontroller.getAutoCompleteSuggestions
);
module.exports = router;
