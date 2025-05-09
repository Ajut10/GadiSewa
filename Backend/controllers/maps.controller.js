const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { address } = req.query;

  try {
    const coordinates = await mapsService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(404).json({ message: "coordinates not found" });
  }
};

module.exports.getDistanceTime = async (req, res) => {
  const { origin, destination } = req.query;
  if (!origin || !destination) {
    return res
      .status(400)
      .json({ message: "Origin and destination are required" });
  }

  try {
    const distanceTime = await mapsService.getDistanceTime(origin, destination);
    return res.status(200).json(distanceTime);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getAutoCompleteSuggestions = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { input } = req.query;
    const suggestions = await mapsService.getAutoCompleteSuggestions(input);
    return res.status(200).json(suggestions);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
