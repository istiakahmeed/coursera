const express = require("express");
const bcrypt = require("bcrypt");

const userModel = require("../models/user.model");
const generateTokenAndSetCookie = require("../lib/generateToken");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

// Signup Endpoint
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Invalid email format" });
    }

    const existingUser = await userModel.findOne({
      username,
    });
    if (existingUser) {
      return res.status(400).json({
        error: "Username is already taken",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: "Password must be 6 characters long ",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Signin Endpoint
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user && !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in signin controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Logout Endpoint
router.post("/logout", (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal server error " });
  }
});

router.get("/me", protectRoute, async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in me controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
