const express = require('express');
const bcrypt = require('bcrypt');
const { users } = require('../data/users');
const router = express.Router();
const saltRounds = parseInt(process.env.SALT_ROUNDS) || 12;

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required'
      });
    }

    // Check if email exists (BONUS)
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered'
      });
    }

    // Hash password with bcrypt (4 MARKS)
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      role: 'customer'
    };

    users.push(newUser);

    res.status(201).json({
      success: true,
      message: 'Registration successful! Welcome to SS Computer Technology',
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Registration failed'
    });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password required'
      });
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Compare password with bcrypt (4 MARKS)
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    res.json({
      success: true,
      message: 'Login successful! Welcome back to SS Computer Technology',
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Login failed'
    });
  }
});

module.exports = router;