const express = require("express");
const router = express.Router();

// User routes
router.use("/user", require("./user"));

// Admin routes
router.use("/admin", require("./admin"));

module.exports = router;