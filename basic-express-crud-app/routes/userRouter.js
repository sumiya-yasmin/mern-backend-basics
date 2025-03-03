const express = require('express');
const { userService } = require('../services');
const { updateUser } = require('../services/userService');
const userRouter = express.Router();
/* 1️⃣ What is a POST Request?
  GET requests fetch data from the server.
  POST requests send data to the server (e.g., when submitting a form).
  We use req.body to access data sent in a POST request.*/
  

// POST route to create a user
userRouter.post('/', (req,res)=>{
  const payload = req.body;
  const newUser = userService.createUsers(payload);
res.status(201).json({message:`user added successfully`,user: newUser});
})
// GET route to retrieve users
userRouter.get('/', (req, res) => {
    res.json(userService.getUsers());
  });

// PUT route update users
userRouter.put('/:id', (req,res)=>{
  const {id} = req.params;
  const payload = req.body;
  const updatedUser = userService.updateUser(id, payload)
  res.status(201).json({message:`User updated successfully`,user: updatedUser })
})

//DELETE route update users
userRouter.delete('/:id', (req,res)=>{
  const {id} = req.params;
  userService.deleteUser(id)
  res.status(201).json({ message: "User deleted successfully!" });

})

module.exports = userRouter ;