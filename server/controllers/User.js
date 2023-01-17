const UserModel = require("../models/User");

module.exports.createUser = function (data) {
    UserModel.create({socket_id: data.socket_id, name: data.name});
};

module.exports.findOneAndUpdate = function (data) {
    UserModel.findOneAndUpdate({socket_id: data.socket_id}, {name: data.name}).exec().then((result) => {
        res.send({"result": result});
    }).catch((error) => {
        res.send("Erreur");
    });
};

module.exports.findOne = function (data) {
    UserModel.findOne({socket_id: data.socket_id}).exec().then((result) => {
        res.send({"result": result});
    }).catch((error) => {
        res.send("Erreur");
    });
};