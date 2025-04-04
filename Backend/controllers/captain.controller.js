const BlackListToken = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  try{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { fullname, email, password, vehicle } = req.body;
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
  
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ error: "Captain already exist" });
    }
    const hashedPassword = await captainModel.hashPassword(password);
  
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
  
    const token = captain.generateAuthToken();
  
    return res.status(201).json({ token, captain });
  }
  catch (error) {

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = await captain.generateAuthToken();
    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

    return res.status(200).json({ token, captain });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlackListToken.create({ token });
  res.clearCookie("token");

  res.status(200).json({ message: "Logout Successful" });
};
