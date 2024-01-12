const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('../config/db-connect');

const ReviewSchema = new Schema({
    reviewerId: {
        type: Schema.Types.String,
    },
    reviewerName: {
        type: Schema.Types.String,
    },
    summary: {
        type: Schema.Types.String,
    },
    rating: {
        type: Schema.Types.String,
    },
    reviewTime: {
        type: Schema.Types.Date,
    },
}, {collection : 'Review'});


module.exports = Review = conn.assesmentDB.model('Review', ReviewSchema);