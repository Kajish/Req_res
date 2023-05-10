const users = require("../data/user.data");

function getAllUsers() {
  if (users.length === 0) {
    return "No users found.";
  }
  return users;
}

function getUserById(id) {
  return users.find((c) => c.id === parseInt(id));
}

function getRandomUser() {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  return randomUser;
}

function addUser(user) {
  users.push(user);
  return users;
}

function updateUser(id, updatedUser) {
  let user = users.find((c) => c.id === parseInt(id));
  user.id = updatedUser.id;
  user.name = updatedUser.name;
  user.email = updatedUser.email;
  return users;
}

function deleteUser(id) {
  const user = users.find((u) => u.id === parseInt(id));
  const index = users.indexOf(user);
  users.splice(index, 1);
  // users.remove(index);
  return users;
}

module.exports = {
  getAllUsers,
  getUserById,
  getRandomUser,
  addUser,
  updateUser,
  deleteUser,
};
