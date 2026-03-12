const express = require('express');
const { login, checkAuth } = require('../controller/authController');
const isAuthorised = require('../middleware/isAuthorised');
const isAdmin = require('../middleware/isAdmin');
const router = express.Router();

router.post('/login', login);
router.get('/check-auth', isAuthorised, isAdmin, checkAuth);

module.exports = router;