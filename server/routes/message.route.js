// const { auth, validate } = require("../middleware");
// const isAdmin = auth.isAdmin;
// const validateCreateAdvertisement = validate.validateCreateAdvertisement;
// const validateUpdateAdvertisement = validate.validateUpdateAdvertisement;
// const validateDeleteAdvertisement = validate.validateDeleteAdvertisement;
const messageController = require("../controllers/message.controller.js");

var router = require("express").Router();


// Save a new message in the database
router.post("/", messageController.create);

// Retrieve all messages
// router.get("/", messageController.findAll);

// // Retrieve the 20 last messages
// router.get("/paginated", messageController.findPaginated);

// // Update a Advertisements with id
// router.put("/admin/:id", [ verifyToken, isAdmin, validateUpdateAdvertisement ], advertisementsController.update);

// // Delete a Advertisements with id
// router.delete("/admin/:token/:id", [ verifyToken, isAdmin, validateDeleteAdvertisement ], advertisementsController.delete);

// // Delete all Advertisements
// router.delete("/admin/:token", [ verifyToken, isAdmin ], advertisementsController.deleteAll);

module.exports = router;