const express = require('express');
const { userController } = require('../controller');
const userRouter = express.Router();
/* 1️⃣ What is a POST Request?
  GET requests fetch data from the server.
  POST requests send data to the server (e.g., when submitting a form).
  We use req.body to access data sent in a POST request.*/
  

// POST route to create a user
userRouter.post('/', userController.createUsers)
// GET route to retrieve users
userRouter.get('/', userController.getUsers);

userRouter.get('/:id', userController.getUserById);
// PUT route update users
userRouter.put('/:id', userController.updateUsers)

//DELETE route update users
userRouter.delete('/:id', userController.deleteUsers)

module.exports = userRouter ;