const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = []; // In-memory storage

exports.register = (req, res) => {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, hashedPassword, role });

    res.status(201).json({ message: 'User registered successfully', username });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }

    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = bcrypt.compareSync(password, user.hashedPassword);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
        { username: user.username, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token });
};

// Bonus Task: me function
exports.me = (req, res) => {
    res.status(200).json({ username: req.user.username, role: req.user.role });
};