// Sample user data (temporary storage)
const users = [];
const getUsers = () => users;

const createUsers = (payload) =>{
  
// if(!payload){
//     throw new Error("name and email required")
// }
const newUser = {id: users.length+1,...payload};
users.push(newUser);
return newUser;
}
const updateUser =(id,payload)=>{
    const index = users.findIndex((user)=>user.id == id)
    if( index===-1){
        throw new Error(`No user found with id ${id}`)
    }
    users[index] = {...users[index],...payload};
    return users[index];
}
const deleteUser = (id) =>{
    const index = users.findIndex((user)=>user.id == id)
    if( index===-1){
      throw new Error(`No user found with id ${id}`)
    }
    users.splice(index,1);
    return true;
}
module.exports = {
    getUsers,
    createUsers,
    updateUser,
    deleteUser,
}