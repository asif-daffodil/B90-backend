const express = require('express');
const { userFunc, userCityFunc, userAgeFunc } = require('../controllers/userController');
const { route } = require('../app');
const ageMiddleware = require('../middleware/ageMiddleware');
const router = express.Router();

router.get('/', userFunc);
router.get('/get{/:city}', userCityFunc);
router.get('/age', ageMiddleware, userAgeFunc);

module.exports = router;