const express = require("express");
const { signUp, signIn, logOut } = require("../controller/user");
const userModel = require("../models/user.model");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  await userModel.create({
    username: username,
    email: email,
    password: password,
  });

  res.json({
    message: "User created successfully",
  });
});
router.post("/signin", signIn);
router.post("/logout", logOut);

module.exports = router;
