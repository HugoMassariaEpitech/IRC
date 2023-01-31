const UserModel = require("../models/user.model.js");
const mongoose = require("mongoose");

// Ca se fait de le auth.controller
// exports.create = (req, res, next) => {
//   // Use destructuring to populate the fields of the user
//   const User = { nickname, identification, nameSalt } = req.body;
//   // {nickname: nickname, identification: identification, avatar: avatar, conversation: conversation}
//   UserModel.create(User).then((result) => {
//       res
//         .status(201)
//         .send({"result": result});
//   }).catch((error) => {
//       res
//         .status(500)
//         .send(`Erreur: ${error}`);
//   });
// };

// Find a single User with an id
exports.findOne = (req, res) => {
  console.log('id = ' + req.query.uid);
  let uid = req.query.uid;

  UserModel.findOne({uid: uid})
      .then(result => {
        if (result) {
          res.send(result);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${uid}.`
          });
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({
            message: "Error retrieving User with id=" + uid,
            error: err
          });
      });
};

// J'ai pas besoin de cette fonction pour les users
// Retrieve all Users from the database.
// exports.findAll = (req, res) => {

//   // Find all Users and there associated advertisements and the associated companie
//   UserModel.findAll({
//     include: [{
//         model: Advertisements,
//     }]
//   })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving users and there associated advertisements."
//       });
//     });
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
//     UserModel.findOne({socket_id: }).exec().then((result) => {
//         res.send({"result": result});
//     }).catch((error) => {
//         res.send("Erreur");
//     });
// };