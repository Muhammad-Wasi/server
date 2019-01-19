const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    // email: String,
    age: Number
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;