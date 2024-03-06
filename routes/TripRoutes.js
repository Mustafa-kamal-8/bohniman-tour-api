const express = require('express');
const {  getTrips ,getTrip, deleteTripById , createTrips , updateTrip,deleteTrip, ck} = require('../controler/tripControlers');

const router = express.Router();



router.route('/:id').get(getTrips);

router.route('/:id').get(getTrip);

router.route('/').post(createTrips)

router.route('/:id').delete(deleteTripById)

router.route('/:id').put(updateTrip)

router.route('/').delete(deleteTrip)

module.exports  =router;