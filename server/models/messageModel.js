const mongoose = require("mongoose");

// On a besoin de la ref vers le model Conversation
const MessageSchema = new mongoose.Schema({
  // Message contient tous les messages d'une conversation
  messages: [{
    sender: String, // completeName
    message: String,
    type: {
      type: String,
      enum: ["text", "image", "video", "audio", "file"],
      default: 'text'
    },
    // Pour que tous les users puissent gérer leur visibility des messages dans une conversation il faut :
    // 1. Ajouter un champ visibility dans le model Message
    // 2. Ca doit être un objet, avec une entrée pour chaque user dans cette conversation
    // 3. Chaque entrée doit contenir un booléen pour savoir si le message est visible ou non pour l'user
    isVisible: {
      type: Boolean,
      default: true
    },
    isRemove: Boolean, // Seul le sender et un admin peut supprimer un message
    state: {
      type: String,
      enum: ["sendind", "sent", "received", "read"]
    },
    // Je crois que le createdAt est automatiquement ajouté par mongoose   
}],
}, {versionKey: true});

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;