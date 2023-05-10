const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    name: "George Bluth",
    email: "george.bluth@reqres.in",
  },
  {
    id: 2,
    name: "Janet Weaver",
    email: "janet.weaver@reqres.in",
  },
  {
    id: 3,
    name: "Vijay P",
    email: "vijay.p@reqres.in",
  },
  {
    id: 4,
    name: "Jishnu Biju",
    email: "jishnu.biju@reqre.in",
  },
  {
    id: 5,
    name: "unais unii",
    email: "unais.uni@reqres.in",
  },
];

function validateUser(user) {
  const schema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().min(4).max(20).required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(user);
}

// get operation
app.get("/api/users", (req, res) => {
  if (users.length === 0) {
    res.send("No users found.");
  }
  res.send(users);
});
//get a user by id
app.get("/api/users/:id", (req, res) => {
  let user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user) {
    res.status(400).send(`There is no user with id ${req.params.id}`);
  } else {
    res.send(`User id:${user.id}\nName:${user.name}\nEmail:${user.email}`);
  }
});
//
//
// get function for a random user
// console.log(users.length);
app.get("/api/user/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  res.send(randomUser);
});

//post operation
app.post("/api/users", (req, res) => {
  const result = validateUser(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    console.log("Error in entry check again");
    console.log(result.error);
  }
  const newUser = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.send(users);
});
//put operation
app.put("/api/users/:id", (req, res) => {
  let user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user) {
    res.status(400).send(`There is no user with id ${req.params.id}`);
  }

  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    console.log(error.details);
    // console.log(result.error);
    return;
  }
  user.id = req.body.id;
  user.name = req.body.name;
  user.email = req.body.email;
  res.send(users);
});
app.delete("/api/users/:id", (req, res) => {
  // Find the user with the given ID
  const user = users.find((u) => u.id === parseInt(req.params.id));

  // If user not found, return 404 error
  if (!user) {
    return res.status(404).send("The user with the given ID was not found.");
  }

  // Remove the user from the users array
  const index = users.indexOf(user);
  users.splice(index, 1);

  // Return the updated users array
  res.send(users);
});

const currentPort = 8080 || process.env.PORT;

app.listen(currentPort, () => console.log(`Listening on port ${currentPort}`));
