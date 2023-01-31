const { addConversationToUser } = require('../middleware/export.middleware');
// const isAdmin = auth.isAdmin;
// const validateCreateAdvertisement = validate.validateCreateAdvertisement;
// const validateUpdateAdvertisement = validate.validateUpdateAdvertisement;
// const validateDeleteAdvertisement = validate.validateDeleteAdvertisement;
const conversationController = require("../controllers/conversation.controller.js");

var router = require("express").Router();

// Create a private conversation
router.post("/private_conversation", [conversationController.createPrivateConversation], addConversationToUser);

// Create a group conversation
router.post("/group_conversation", conversationController.createGroupConversation);

// // Retrieve all Advertisements
// router.get("/", advertisementsController.findAll);

// // Retrieve one Advertisement by ID
// router.get("/:id", advertisementsController.findOne);

// // Update a Advertisements with id
// router.put("/admin/:id", [ verifyToken, isAdmin, validateUpdateAdvertisement ], advertisementsController.update);

// // Delete a Advertisements with id
// router.delete("/admin/:token/:id", [ verifyToken, isAdmin, validateDeleteAdvertisement ], advertisementsController.delete);

// // Delete all Advertisements
// router.delete("/admin/:token", [ verifyToken, isAdmin ], advertisementsController.deleteAll);

module.exports = router;