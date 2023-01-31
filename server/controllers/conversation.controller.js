const UserModel = require("../models/user.model");

exports.addConversationToUser = async (req, res) => {
  const { conversationId, uid } = req.body;

  UserModel.findOneAndUpdate(uid, { $push: { conversations: conversationId } })
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

// const getUser = (userId) => {
//   const { userId } = req.body;

//   try {
//     UserModel.findOne({ _id: userId }).exec().then((result) => {
//       return result;
//     });
//   } catch (error) {
//     // Faire une erreur plus verbeuse
//     res.status(500).send(`Erreur: ${error}`);
//     next();
//   }
// };





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