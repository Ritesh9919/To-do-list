const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user_controller');
const postController = require('../controllers/user_controller');
router.get('/profile', usersController.profile);
router.get('/post', postController.post);


module.exports = router;