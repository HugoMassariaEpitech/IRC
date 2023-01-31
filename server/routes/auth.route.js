const { generateNameSalt, createUID } = require('../middleware/export.middleware');
// const isAdmin = auth.isAdmin;
// const validateCreateAdvertisement = validate.validateCreateAdvertisement;
// const validateUpdateAdvertisement = validate.validateUpdateAdvertisement;
// const validateDeleteAdvertisement = validate.validateDeleteAdvertisement;
const authController = require("../controllers/auth.controller.js");

var router = require("express").Router();

// Register a new User
router.post("/register", [generateNameSalt, createUID ], authController.register);

// Login an User
router.get("/signin", authController.signin);

// // Retrieve one Advertisement by ID
// router.get("/:id", advertisementsController.findOne);

// // Update a Advertisements with id
// router.put("/admin/:id", [ verifyToken, isAdmin, validateUpdateAdvertisement ], advertisementsController.update);

// // Delete a Advertisements with id
// router.delete("/admin/:token/:id", [ verifyToken, isAdmin, validateDeleteAdvertisement ], advertisementsController.delete);

// // Delete all Advertisements
// router.delete("/admin/:token", [ verifyToken, isAdmin ], advertisementsController.deleteAll);

module.exports = router;