const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authenticateToken = require('../../middleware/authenticate-token');

router.get('/get-all-reviews', authenticateToken, controller.getAllReviews);
router.post('/create-review', authenticateToken, controller.createReview);
router.post('/update-review', authenticateToken, controller.updateReview);
router.post('/delete-review', authenticateToken, controller.deleteReview);

module.exports = router;