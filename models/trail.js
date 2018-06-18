const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: false },
    abstract: String,
    date: { type: Date, default: Date.now },
    url: { type: String, required: true },
    saved: { type: Boolean, default: false }
});

const Trail = mongoose.model("trail", trailSchema);

module.exports = Trail;
