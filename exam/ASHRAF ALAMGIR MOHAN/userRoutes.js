const express = require("express");
const router = express.Router();

// POST /register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Dummy response (you can add DB logic later)
  res.json({
    message: "User registered successfully",
    user: { name, email }
  });
});

// POST /login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Dummy login check
  res.json({
    message: "Login successful",
    user: { email }
  });
});

module.exports = router;