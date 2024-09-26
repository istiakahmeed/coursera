const express = require("express");
const { course } = require("../controller/crouse");

const router = express.Router();

router.get("/courses", course);

module.exports = router;
