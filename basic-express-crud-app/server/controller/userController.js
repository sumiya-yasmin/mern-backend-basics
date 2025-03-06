const { userService } = require('../services');
const asyncHandler = require('express-async-handler');

const createUsers = asyncHandler(async (req, res) => {
  const payload = req.body;
  const newUser = await userService.createUsers(payload);
  res.status(201).json({ message: `user added successfully`, user: newUser });
});

const getUsers = asyncHandler(async (req, res) => {
  const { page, offset } = req.query;
  const users = await userService.getUsers({
    page: parseInt(page || '0'),
    offset: parseInt(offset || '10'),
  });
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  res.json(user);
});

const updateUsers = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const updatedUser = await userService.updateUser(id, payload);
  res
    .status(201)
    .json({ message: `User updated successfully`, user: updatedUser });
});

const deleteUsers = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.status(201).json({ message: `User with id-${id} deleted successfully!` });
});
module.exports = {
  getUsers,
  getUserById,
  createUsers,
  updateUsers,
  deleteUsers,
};
