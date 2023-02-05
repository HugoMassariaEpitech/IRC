const { setLastMessage } = require('../middleware/export.middleware');
const channelController = require("../controllers/channel.controller");

var router = require("express").Router();

router.post("/", channelController.create, setLastMessage);
router.post("/join", channelController.join);
router.post("/message", channelController.message);

module.exports = router;