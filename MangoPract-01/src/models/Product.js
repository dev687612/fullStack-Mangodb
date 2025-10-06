const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Product", ProductSchema);