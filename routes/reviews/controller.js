const Review = require('../../models/review');
const sendResponse = require('../../utils/response');
const httpStatus = require('http-status');

const getAllReviews= async (req, res) => {
    let pageSize = 10, skipCount = 0;
    const query = {};
    if (req.query) {
        pageSize = req.query.limit;
        skipCount = req.query.page * pageSize
    }
    const allReviews = await Review.find().limit(pageSize).skip(skipCount);
    const total = await Review.countDocuments(query);

    return sendResponse(res, httpStatus.OK , {allReviews, total});
}

module.exports = {
    getAllReviews,
}