const { generateNameSalt, createUID, getRandomAvatar } = require("./auth.middleware");
const { addConversationToUser } = require("./conversation.middleware");

module.exports = {
  generateNameSalt,
  createUID, 
  getRandomAvatar,
  addConversationToUser
}