const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const isAuthorised = require('../middleware/isAuthorised');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', isAuthorised, authController.me); // Bonus

module.exports = router;