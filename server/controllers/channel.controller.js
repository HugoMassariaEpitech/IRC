const ChannelModel = require("../models/channel.model");
const mongoose = require("mongoose");

exports.create = async (req, res, next) => {
    const Channel = { messages: [{ type: "notification", message: "Hugo Massaria created channel" }], name: req.body.name, author: req.body.user, avatar: req.body.avatar};
    ChannelModel.create(Channel).then((data) => {
        // req.data.uid = data._id;
        // req.data.channel = {name: data.name, author: data.author, avatar: data.avatar, message: data.messages[0].message};
        req.data = data;
        next();
    }).catch((error) => {
        res.status(400).send(error);
    });
};

exports.join = async (req, res) => {
    await ChannelModel.updateMany({ "_id": { $in: [mongoose.Types.ObjectId(req.body.uid)] } }, [{
        $set: {
            messages: {
                $concatArrays: [
                    "$messages",
                    [{ type: "notification", message: "Hugo Massaria joined channel" }]
                ]
            }
        }
    }]).then((data) => {
        res.status(200).send({ type: "message", status: "updated" });
    });
};

exports.message = async (req, res) => {
    await ChannelModel.updateMany({ "_id": { $in: [mongoose.Types.ObjectId(req.body.uid)] } }, [{
        $set: {
            messages: {
                $concatArrays: [
                    "$messages",
                    [{ type: "message", user: req.body.user, avatar: req.body.avatar, message: req.body.message }]
                ]
            }
        }
    }]).then((data) => {
        res.status(200).send({ type: "message", status: "updated" });
    });
};