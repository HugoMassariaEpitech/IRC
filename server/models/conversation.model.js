const mongoose = require("mongoose");

// 
const ConversationSchema = new mongoose.Schema({
  // Create a user object with the uid as key of an object containing as properties nickname, isAdmin
  // Le bracket devrait permettre de faire un object, dans lequel on peut mettre plusieurs array definissant les users
  users: [{
      uid: {
        type: String, 
        required: true,
        trim: true
      },
      // By default the nickname is the name of the user(s)
      nickname: {
        type: String, 
        required: false,
        match: [/^[a-zA-Z0-9.#_-]+$/, "is invalid"], // To understand the regex, see https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
        // Or https://regex101.com
        maxlength: 20,
        trim: true
      }, // Si pas de nickname, alors le nickname est le name de base
      isAdmin: {
        type: Boolean,
        default: false
      },
    //   role: {
    //       type: String,
    //       enum: ["user", "admin"],
    //       default: "user"
    //   }
  }],
  conversationName: String,
  isGroupConversation: {
    type: Boolean,
    default: false
  },
}, {versionKey: false});

const ConversationModel = mongoose.model("Conversation", ConversationSchema);

module.exports = ConversationModel;