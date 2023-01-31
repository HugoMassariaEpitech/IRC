const conversationModel = require("../models/conversation.model.js");

createPrivateConversation = (req, res, next) => {
  // Use destructuring to populate the fields of the user
  // const users = req.body.users;
  // console.log(...users)
  // Je comprends pas comment, mais les users sont bien dans la conversation
  const conversation = { conversationName, isGroupConversation } = req.body;
  // console.log(conversation);
  // {nickname: nickname, identification: identification, avatar: avatar, conversation: conversation}
  conversationModel.create(conversation)
  .then((result) => {
    res
      .status(201)
      .send({"result": result});
    next();
  }).catch((error) => {
    res
      .status(500)
      .send(`Erreur: ${error}`);
    next();
  });
};

createGroupConversation = (req, res, next) => {
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


module.exports = {
  createPrivateConversation,
  createGroupConversation
};