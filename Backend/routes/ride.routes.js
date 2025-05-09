const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/user.middleware');
router.post('/create', 
    authMiddleware.authUser,
    body('pickup').isString().isLength({min: 3}).withMessage('invalid pickup location'),
    body('destination').isString().isLength({min: 3}).withMessage('invalid destination location'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('invalid vehicle type'),
    rideController.createRide

 
);

module.exports = router