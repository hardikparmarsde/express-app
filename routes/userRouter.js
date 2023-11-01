const express = require('express');
const { createUser, getAllUsers, updateUser, deleteUser, getUserById } = require('../controllers/userController');
const userRouter = express.Router();

// Create a new user
userRouter.post('/create', createUser);
userRouter.get('/getAll', getAllUsers);
userRouter.put('/update/:userId', updateUser);
userRouter.delete('/delete/:userId', deleteUser);
userRouter.get('/getSingle/:userId', getUserById);


module.exports = userRouter;
