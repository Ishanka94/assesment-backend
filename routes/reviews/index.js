const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authenticateToken = require('../../middleware/authenticate-token');

router.get('/get-all-reviews', authenticateToken, controller.getAllReviews);

module.exports = router;