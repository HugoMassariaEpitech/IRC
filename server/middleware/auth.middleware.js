// Get an avatar from `https://placeimg.com/${Math.floor(Math.random()*200)}/${Math.floor(Math.random()*200)}/people`
const User = require("../models/user.model");
const mongoose = require("mongoose");

// Get a ramdom number between 0 and 99, for the nameSalt
generateNameSalt = async (req, res, next) => {
  // Trouver tous les users avec le même name, et si il y en a, alors ajouter 1 au nameSalt et si il y a un trou, alors prendre ce trou
  // e.g Jean#1, Jean#3, alors prendre Jean#2
  // e.g Jean#1, Jean#2, alors prendre Jean#3
  User.find({"identification.name": req.body.name}).then((result) => {
    req.body.nameSalt = findTheNextNameSalt(result);
    next();
  }).catch((error) => {
    res.status(500).send(`Erreur: ${error}`);
  });
};

// TODO: Trouver les trous dans les nameSalt

findTheNextNameSalt = (users) => {
  if (users.length > 0) {
      // Utiliser contains pour vérifier si il y a un trou dans les nameSalt
    // users.contains
    // Il y a déjà un user avec ce name
    // Trouver le nameSalt le plus grand
    let max = 0;
    for (let i = 0; i < users.length; i++) {

      // Dans un premier temps vérifier si il y a un trou dans les nameSalt
      // if (users[i].identification.nameSalt !== users[i+1].identification.nameSalt - 1) {
      //   // Il y a un trou
      //   return (users[i].identification.nameSalt + 1);
      // }
      // SI il n'y a pas de trou, alors prendre le nameSalt le plus grand
      if (users[i].nameSalt > max) {
        max = users[i].nameSalt;
      }
    }
    return (max + 1);
  } else {
    // Il n'y a pas de user avec ce name
    return 0;
  }
}

createUID = (req, res, next) => {
  req.body.uid = req.body.name + "#" + req.body.nameSalt;
  next();
};

// Get a random avatar picture for the user
// randomuser.me/api/portraits/women/1.jpg
// exports.getRandomAvatar = (req, res, next) => {

// Get a random avatar picture for the user
// exports.getRandomAvatar = (req, res, next) => {


module.exports = {
  generateNameSalt,
  createUID
};