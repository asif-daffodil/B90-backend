const express = require('express');
const router = express.Router();
const { createPass } = require('../controllers/passwordController');

router.post('/create-password', createPass);

module.exports = router;