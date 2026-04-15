const express = require('express');
const { getAllUsers, updateUser } = require('../controllers/userController');
const checkCity = require('../middleware/checkCity');
const upload = require('../middleware/uploadImage');
const router = express.Router();

router.get('/', checkCity, getAllUsers);
router.post('/upload-image', upload.single('image'), updateUser);

module.exports = router;