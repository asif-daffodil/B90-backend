const jwt = require("jsonwebtoken");

const getAllUsers = (req, res) => {
    res.send("All users");
};

const getUserprofile = (req, res) => {
    res.send("User Profile");
};

// login function
const login = (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    if (email === "ashraf@mohan.com" && password === "12345678") {
        const token = jwt.sign({ email, password }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.json({ token });
    }

    res.status(401).json({ message: "Invalid credentials" });
}

const checkUserLogin = (req, res) => {
    const header = req.headers.authorization

    if (header === undefined) {
        return res.status(401).json({ message: "Authorization header is required" });
    }

    const token = header.split(" ")[1];

    if (token === undefined) {
        return res.status(401).json({ message: "Token is required" });
    }

    const Bearer = header.split(" ")[0];
    if (Bearer !== "Bearer") {
        return res.status(401).json({ message: "Invalid token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return res.json({ decoded })
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }
}

module.exports = {
    getAllUsers,
    getUserprofile,
    login,
    checkUserLogin
};