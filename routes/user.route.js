const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller.js");
console.log("Entered router");
// GET all users
router.get("/api/users", userController.getAllUsers);

// GET a user by ID
router.get("/api/users/:id", userController.getUserById);

// GET a random user
router.get("/api/user/random", userController.getRandomUser);

// POST a new user
router.post("/api/users", userController.addUser);

// PUT (update) an existing user by ID
router.put("/api/users/:id", userController.updateUser);

// DELETE a user by ID
router.delete("/api/users/:id", userController.deleteUser);

module.exports = router;

//swagger -- api documentation

//1 documentation
//2 adding swagger
//3 Logger
