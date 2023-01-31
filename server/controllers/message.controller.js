const messageModel = require("../models/message.model.js");

exports.create = async (req, res, next) => {
  // Use destructuring to populate the fields of the user
  const message = { sender, messsage, conversation } = req.body;
  // {nickname: nickname, identification: identification, avatar: avatar, conversation: conversation}
  
  messageModel.create(message).then((result) => {
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