const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});
const cartData = mongoose.model("cartdata", cartSchema);
module.exports = cartData;