const { NotFoundError } = require('../errors');
const { User } = require('../models');

// Sample user data (temporary storage)
// const users = [];
const getUsers = async ({ page = '0', offset = '10' }) => {
  const users = await User.find({ deleted: false })
    .select('name email userId password')
    .skip(page * offset)
    .sort({ creatdAt: -1 })
    .limit(offset);
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ _id: id, deleted: false });
  return user;
};

const createUsers = async (payload) => {
  const newUser = new User(payload);
  await newUser.save();
  return newUser;
};

const updateUser = async (id, payload) => {
  return await User.findByIdAndUpdate({ _id: id }, payload, { new: true });
};

const deleteUser = async (id) => {
  await User.findOneAndUpdate(
    { _id: id },
    { deleted: true, deletedAt: new Date() }
  );
  return true;
};
module.exports = {
  getUsers,
  getUserById,
  createUsers,
  updateUser,
  deleteUser,
};

//   // const index = users.findIndex((user)=>user.id == id)
// if( index===-1){
//   throw new NotFoundError(`No user found with id ${id}`)
// }
// users.splice(index,1);
