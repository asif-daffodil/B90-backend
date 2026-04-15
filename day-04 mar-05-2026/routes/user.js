const express = require('express');
const { getUser, createUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUser);

router.post('/create', createUser);


module.exports = router;