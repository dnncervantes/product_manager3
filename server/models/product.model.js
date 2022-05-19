const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [2, "{PATH} must be at least 2 characters long"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 characters long"]
    }
}, {timestamps:true})

//=====Create the schema and export it====
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;