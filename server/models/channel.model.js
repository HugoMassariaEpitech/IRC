const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No name provided."]
    },
    author: {
        type: String,
        required: [true, "No author provided."]
    },
    avatar: String,
    messages: {
        type: [Map]
    }
}, { versionKey: false });

const ChannelModel = mongoose.model("Channel", ChannelSchema);

module.exports = ChannelModel;