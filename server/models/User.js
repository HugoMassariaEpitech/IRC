const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    socket_id: String,
    name: String
}, {versionKey: false});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;