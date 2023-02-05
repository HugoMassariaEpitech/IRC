const UserModel = require("../models/user.model");
const mongoose = require("mongoose");

setLastMessage = (req, res) => {
    UserModel.updateMany({ "_id": { $in: [mongoose.Types.ObjectId(req.body.uid)] } }, [{
        $set: {
            channels: {
                $mergeObjects: [
                    "$channels",
                    {[req.data._id] : req.data}
                ]
            }
        }
    }]).then((data) => {
        res.status(200).send({ type: "message", status: "updated" });
    });
};

module.exports = { setLastMessage };