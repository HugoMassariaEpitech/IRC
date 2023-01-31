const UserModel = require("../models/user.model");

updateLastMessage = async (req, res) => {
  // const { conversationId, uid: sender } = req.body;

  UserModel.findOneAndUpdate(req.body.sender, { conversations: { conversationId: req.body.conversationId } })
    .then((result) => {
      res
        .status(201)
        .send({ result: result });
    })
    .catch((error) => {
      res
      .status(500)
      .send(`Erreur: ${error}`);
    });
};



module.exports = {
  updateLastMessage
};