const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        default: 'customer'
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
})
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;