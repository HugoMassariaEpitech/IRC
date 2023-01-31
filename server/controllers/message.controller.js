const messageModel = require("../models/message.model.js");

exports.create = async (req, res) => {
  // Use destructuring to populate the fields of the user
  const message = { sender, messsage, conversationId } = req.body;
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

exports.findAll = async (req, res) => {
  const conversationId = req.query.conversationId;
  messageModel.find({ conversationId })
    .then((result) => {
      // [{ sender, message, type, createdAt } ] = result
      // Ne renvoyer que le sender message type createdAt
      res
        .status(200)
        .send({ ...result });
    })
    .catch((error) => {
      res
        .status(500)
        .send(`Erreur: ${error}`);
    });
};

exports.findPaginated = async (req, res) => {
  const { conversationId  } = req.query;

  // console.log("conversationId", conversationId, "\ncreatedAtBefore", createdAtBefore);

  // messageModel.find({conversationId: conversationId, createdAt: { $lte: createdAtBefore } })
  //   .limit( 10 )
  //   .then((result) => {
  //     res
  //       .status(200)
  //       .send({ ...result });
  //   })
  //   .catch((error) => {
  //     res
  //       .status(500)
  //       .send(`Erreur: ${error}`);
  //   });

  // Trouver quel a été le dernier message récupéré, pour savoir à partir de combien skip
  messageModel.find({conversationId})
    .select('sender message type createdAt')
    .limit(10)
    .skip(1)  
    .then((result) => {
      res
        .status(200)
        .send({ ...result });
    })
    .catch((error) => {
      res
        .status(500)
        .send(`Erreur: ${error}`);
    });

};

  // MyModel.find( { createdOn: { $lte: request.createdOnBefore } } )
  //   .limit( 10 )
  //   .sort( '-createdOn' )





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