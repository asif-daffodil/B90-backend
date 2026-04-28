const express = require("express");
const { getAdmin, getAdminDashboard } = require("../controllers/adminController");
const router = express.Router();

router.get("/", getAdmin);

router.get("/dashboard", getAdminDashboard);

module.exports = router;