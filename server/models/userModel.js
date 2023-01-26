const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    // socket_id: String, On a pas besoin de save le socket_id du fait que le socket_id est unique et qu'il est généré par le serveur à chaque connexion
    name: {
        name: String,
        nameSalt: String, // De la même manière que Discord '#00' to '#99', via validator utiliser une regex pour force ça, enfin nan increment pour chaque name identique
        completeName: String // name + nameSalt
    },
    avatar: String, // Lien vers l'image de l'avatar
    // La convertion est une ref vers le model Conversation
    conversation: [{type: mongoose.Schema.Types.ObjectId, ref: "Conversation"}],
    
}, {versionKey: false});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;