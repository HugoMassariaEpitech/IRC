const { getRandomAvatar } = require("./auth.middleware");
const { checkUsersExists, getLastMessages } = require("./message.middleware");
const { setLastMessage } = require("./channel.middleware");

module.exports = {
  getRandomAvatar,
  checkUsersExists,
  setLastMessage
}