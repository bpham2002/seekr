const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: { type: String, required: true },
    pwd: { type: String, required: true },
    roles: []
});

const User = mongoose.model("user", userSchema);

module.exports = User;
