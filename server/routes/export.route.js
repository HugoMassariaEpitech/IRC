const auth = require("./auth.route");
const user = require("./user.route");
const conversation = require("./conversation.route");
const message = require("./message.route");

module.exports = {
  auth,
  user,
  conversation,
  message
}