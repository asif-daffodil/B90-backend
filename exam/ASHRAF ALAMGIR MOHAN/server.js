
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Create app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON data

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Use environment variable
const PORT = process.env.PORT || 3000;
const SALT_ROUNDS = process.env.SALT_ROUNDS;

console.log("Salt Rounds:", SALT_ROUNDS);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});