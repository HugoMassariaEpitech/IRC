const { getRandomAvatar } = require('../middleware/export.middleware');
const authController = require("../controllers/auth.controller.js");
const messageController = require("../controllers/message.controller.js");

var router = require("express").Router();

router.post("/register", getRandomAvatar, authController.register);

router.post("/signin", authController.signin, messageController.getLast, authController.getNicknameAvatar);

module.exports = router;