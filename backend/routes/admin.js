const express = require("express");
const { signUp, signIn, logOut } = require("../controller/admin");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/logout", logOut);

module.exports = router;
