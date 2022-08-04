"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const imageSchema = new mongoose_1.Schema({
    mobile: {
        type: String,
        required: true,
    },
    tablet: {
        type: String,
        required: true,
    },
    desktop: {
        type: String,
        required: true,
    },
});
const itemSchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
});
const productSchema = new mongoose_1.Schema({
    slug: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: imageSchema,
        _id: false,
    },
    category: {
        type: String,
        required: true,
    },
    categoryImage: {
        type: imageSchema,
        _id: false,
    },
    includes: {
        type: [itemSchema],
        _id: false,
    },
    gallery: {
        first: {
            type: imageSchema,
            _id: false,
        },
        second: {
            type: imageSchema,
            _id: false,
        },
        third: {
            type: imageSchema,
            _id: false,
        },
    },
    others: [this],
});
// if above code for 'others' does not work
// productSchema.add({
//   others: [productSchema]
// })
exports.default = (0, mongoose_1.model)('Product', productSchema);
