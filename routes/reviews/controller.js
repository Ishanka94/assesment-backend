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

const createReview = async (req, res) => {
    const review = Review(req.body);
    const savedData = await review.save();
    if (savedData) {
        return sendResponse(res, httpStatus.OK , savedData);
    }
};

const updateReview = async (req, res) => {
    const updatedReview = await Review.findOneAndUpdate({_id: req?.body?._id}, req.body, {new: true});
    if (updatedReview) {
        return sendResponse(res, httpStatus.OK , updatedReview);
    }
};

const deleteReview = async (req, res) => {
    const deletedReview = await Review.findByIdAndDelete({_id: req?.body?._id});
    if (deletedReview) {
        return sendResponse(res, httpStatus.OK , deletedReview);
    }
};

module.exports = {
    getAllReviews,
    updateReview,
    createReview,
    deleteReview
}