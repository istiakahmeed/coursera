const express = require("express");
const adminModel = require("../models/admin.model");
const generateTokenAndSetCookie = require("../lib/generateToken");
const userModel = require("../models/user.model");
const protectRouteAdmin = require("../middleware/protectRouteAdmin");
const crouseModel = require("../models/course.model");
const courseModel = require("../models/course.model");

const router = express.Router();

// Admin signup endpoint
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Invalid email format" });
    }

    const existingUser = await adminModel.findOne({
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

    const newUser = new adminModel({
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
    const user = await userModel.findOne({
      email,
    });

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
    console.log("Error in admin signin controller", error.message);
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

// create course route
router.post("/course", protectRouteAdmin, async (req, res) => {
  try {
    const { title, description, price, imageUrl, adminId } = req.body;

    // Validate required fields
    if (!title || !description || !price || !adminId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the instructor exists (assuming there's a User model)
    const instructor = await User.findById(adminId);
    if (!instructor) {
      return res.status(404).json({ error: "Instructor not found" });
    }

    // Create the course
    const course = new courseModel({
      title,
      description,
      price,
      imageUrl,
      creatorId: instructor._id,
    });

    // Save the course to the database
    await course.save();

    // Return the newly created course
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    console.error("Error creating course:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update the course
router.put("/course/:id", protectRouteAdmin, async (req, res) => {
  try {
    const { id } = req.params.id;
    const { title, description, price, imageUrl } = req.body;
    const course = await courseModel.findById(id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (!title || !description || !price || !imageUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }

    course.title = title || course.title;
    course.description = description || course.description;
    course.price = price || course.price;
    course.imageUrl = imageUrl || course.imageUrl;

    await course.save();

    res.status(200).json({ message: "Course updated successfully", course });
  } catch (error) {
    console.error("Error updating course:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/course/bulk", protectRouteAdmin, async (req, res) => {
  try {
    const adminId = req.userId;
    const courses = await courseModel.find({
      creatorId: adminId,
    });

    if (courses.length === 0) {
      return res.status(404).json({ message: "No courses found" });
    }

    res.status(200).json({
      message: "Courses retrieved successfully",
      courses,
    });
  } catch (error) {
    console.error("Error retrieving courses:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
