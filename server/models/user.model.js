const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nickname: {
      type: String,
      required: [true, "Please provide a nickname"]
    },
    // socket_id: String, On a pas besoin de save le socket_id du fait que le socket_id est unique et qu'il est généré par le serveur à chaque connexion

    nameSalt: { // De la même manière que Discord '#00' to '#99', via validator utiliser une regex pour force ça, enfin nan increment pour chaque name identique
      type: Number,
      min: 0,
      max: 99,
      // Pas besoin de required ou de lowercase, car c'est dans le controller que je gère ça
      // required: true,
      // lowercase: true,
    }, 
    uid: { // name + # + nameSalt
      type: String,
      // Pas besoin de required ou de lowercase, car c'est dans le controller que je gère ça
      // required: true,
      // lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"]
      // Normal le MDP est crypté
      // minlength: 8,
      // maxLength: 20,
      // trim: true,
      // // Required lowcase uppercase number and special character
      // match: [/^[a-zA-Z0-9.!#_-]+$/, "is invalid"]
    },
    // C'est dans le controller que je gère ça
    avatar: String, // Lien vers l'image de l'avatar
    // La convertion est une ref vers le model Conversation
    conversation: [{type: mongoose.Schema.Types.ObjectId, ref: "ConversationModel"}],
    
}, {versionKey: false});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;