const mongoose = require('mongoose');

const dbURI = process.env.ATLAS_URI;
const assesmentDB = mongoose.createConnection(dbURI);

assesmentDB.on('connected', () => {
    console.log('connected to the db');
});


module.exports = { assesmentDB };