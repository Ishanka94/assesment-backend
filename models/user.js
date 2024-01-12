const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const conn = require('../config/db-connect');

const UserSchema = new Schema({
    email: {
        type: Schema.Types.String,
    },
    password: {
        type: Schema.Types.String,
    },
    name: {
        type: Schema.Types.String,
    },
}, {collection : 'User'});

// Hash the user's password before saving it
UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  });

// Compare user's entered password with the stored hash
UserSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = User = conn.assesmentDB.model('User', UserSchema);