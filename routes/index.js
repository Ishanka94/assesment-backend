const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const reviewRouter = require('./reviews');

router.use('/auth', authRouter);
router.use('/review', reviewRouter);

module.exports = router;


