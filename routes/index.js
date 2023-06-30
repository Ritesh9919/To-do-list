const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo');

// routers
router.get('/', todo.home);
router.post('/create-todolist', todo.create);
router.get('/delete-task', todo.delete);

module.exports = router;