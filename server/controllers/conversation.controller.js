const conversationModel = require("../models/conversation.model.js");

exports.createPrivateConversation = (req, res, next) => {
  // Use destructuring to populate the fields of the user
  const conversation = { conversationName, isGroupConversation } = req.body;
  // {nickname: nickname, identification: identification, avatar: avatar, conversation: conversation}
  conversationModel.create(conversation).then((result) => {
      res
        .status(201)
        .send({"result": result});
  }).catch((error) => {
      res
        .status(500)
        .send(`Erreur: ${error}`);
  });
};

exports.createGroupConversation = (req, res, next) => {
  // Use destructuring to populate the fields of the user
  const conversation = { conversationName, isGroupConversation, mess } = req.body;

  // {nickname: nickname, identification: identification, avatar: avatar, conversation: conversation}
  conversationModel.create(conversation).then((result) => {
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