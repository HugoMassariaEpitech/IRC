const { generateNameSalt, createUID, getRandomAvatar } = require("./auth.middleware");
const { createPrivateConversation, createGroupConversation } = require("./conversation.middleware");
const { updateLastMessage } = require("./message.middleware");

module.exports = {
  generateNameSalt,
  createUID, 
  getRandomAvatar,
  createPrivateConversation,
  createGroupConversation,
  updateLastMessage
}