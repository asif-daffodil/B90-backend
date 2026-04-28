const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");


router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        global.user = {
            username,
            password: hashedPassword
        };

        res.json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!global.user || global.user.username !== username) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, global.user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.json({ message: "Login successful" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;