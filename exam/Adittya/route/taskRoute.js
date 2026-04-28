const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');
const isAuthorised = require('../middleware/isAuthorised');
const isAdmin = require('../middleware/isAdmin');

router.get('/all', isAuthorised, taskController.getAllTasks);
router.post('/create', isAuthorised, taskController.createTask);
router.delete('/delete/:id', isAuthorised, isAdmin, taskController.deleteTask);

module.exports = router;