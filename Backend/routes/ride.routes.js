const express = require('express');
const router = express.Router();
const {body, query} = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middleware/user.middleware');
router.post('/create', 
    authMiddleware.authUser,
    body('pickup').isString().isLength({min: 3}).withMessage('invalid pickup location'),
    body('destination').isString().isLength({min: 3}).withMessage('invalid destination location'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('invalid vehicle type'),
    rideController.createRide

 
);

router.get('/get-fare', 
    authMiddleware.authUser,
    query('pickup').isString().isLength({min: 3}).withMessage('invalid pickup location'),
    query('destination').isString().isLength({min: 3}).withMessage('invalid destination location'),
    rideController.getFare
);
router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide
)

module.exports = router