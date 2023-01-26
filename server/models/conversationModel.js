const mongoose = require("mongoose");

// 
const ConversationSchema = new mongoose.Schema({
  // User contient tous les utilisateurs, en clé leur id, en propriété nickname et role
  users: [{
      nickname: String,
      role: {
          type: String,
          enum: ["user", "admin"],
          default: "user"
      }
  }],
  // Ref vers les messages d'une conversation
  messages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
  }],
    
}, {versionKey: false});

const ConversationModel = mongoose.model("Conversation", ConversationSchema);

module.exports = ConversationModel;