// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const reviewsRouter = require('./reviews.js');
const bookingsRouter = require('./bookings.js');

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');

const { Booking, Review, ReviewImage, Spot, SpotImage, User } = require('../../db/models');
const spot = require('../../db/models/spot.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/reviews', reviewsRouter);
router.use('/bookings', bookingsRouter);

module.exports = router;