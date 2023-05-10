const userService = require("../services/user.service");

function getAllUsers(req, res) {
  console.log("entered get all users");
  const users = userService.getAllUsers();
  res.send(users);
}

function getUserById(req, res) {
  const user = userService.getUserById(req.params.id);
  if (!user) {
    res.status(400).send(`There is no user with id ${req.params.id}`);
  } else {
    res.send(`User id:${user.id}\nName:${user.name}\nEmail:${user.email}`);
  }
}

function getRandomUser(req, res) {
  const randomUser = userService.getRandomUser();
  res.send(randomUser);
}

function addUser(req, res) {
  const newUser = {
    id: req.body.id,
    name: req.body.name, ///TODO Validation
    email: req.body.email,
  };
  const users = userService.addUser(newUser);
  res.send(users);
}

function updateUser(req, res) {
  const updatedUser = {
    id: req.body.id,
    name: req.body.name, ///TODO Validation -- joi
    name: req.body.name,
    email: req.body.email,
  };
  const users = userService.updateUser(req.params.id, updatedUser);
  res.send(users);
}

function deleteUser(req, res) {
  const users = userService.deleteUser(req.params.id);
  name: req.body.name, ///TODO Validation
    res.send(users);
}

module.exports = {
  getAllUsers,
  getUserById,
  getRandomUser,
  addUser,
  updateUser,
  deleteUser,
};
