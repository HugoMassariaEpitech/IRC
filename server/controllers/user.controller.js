const UserModel = require("../models/user.model.js");
const mongoose = require("mongoose");

exports.create = (req, res, next) => {
  // Use destructuring to populate the fields of the user
  const User = { nickname, identification, nameSalt } = req.body;
  // {nickname: nickname, identification: identification, avatar: avatar, conversation: conversation}
  UserModel.create(User).then((result) => {
      res
        .status(201)
        .send({"result": result});
  }).catch((error) => {
      res
        .status(500)
        .send(`Erreur: ${error}`);
  });
};





// module.exports.createUser = function (data) {
//     UserModel.create({socket_id: data.socket_id, name: data.name});
// };

// module.exports.findOneAndUpdate = function (data) {
//     UserModel.findOneAndUpdate({socket_id: data.socket_id}, {name: data.name}).exec().then((result) => {
//         res.send({"result": result});
//     }).catch((error) => {
//         res.send("Erreur");
//     });
// };

// module.exports.findOne = function (data) {
//     UserModel.findOne({socket_id: data.socket_id}).exec().then((result) => {
//         res.send({"result": result});
//     }).catch((error) => {
//         res.send("Erreur");
//     });
// };