const express = require('express');
const { createUser } = require('../controllers/userController');
const userRouter = express.Router();

// Create a new user
userRouter.post('/users', createUser);

module.exports = userRouter;
