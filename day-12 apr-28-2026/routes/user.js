const express = require("express");
const { getAllUsers, getUserprofile, login, checkUserLogin } = require("../controllers/userController");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/profile", getUserprofile);
router.post("/login", login);
router.get("/check-user-login", checkUserLogin)

module.exports = router;