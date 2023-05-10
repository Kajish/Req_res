const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

// Middleware
app.use(express.json());

// Routes
app.use("/", userRouter);

// Start server
//const port = process.env.PORT || 8080;
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
