const mongoose = require("mongoose")
const { Schema, model } = mongoose

const mediaSchema = new Schema ({
    name: { type: String, required: true },
    author: { type: String, required: true },
    type: { type: String, required: true },
    rating: {type: Number, min: 1, max: 10, required: true},
    comment: {type: String, default: "" }
})

const userSchema = new Schema ({
    username: { type: String, required: true },
    password: { type: String, required: true },
    mediaList: [mediaSchema]
})

module.exports = model('User', userSchema)