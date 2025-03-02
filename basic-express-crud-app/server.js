const express = require('express');
const app = express();
const port = 1000;


// Custom Middleware - Logs request details
const requestLogger = (req,res,next)=>{
console.log(`${req.method} recieved at ${req.url}`)
next();
}

// Apply middleware globally
app.use(requestLogger)

// Built in Middleware to parse JSON requests
app.use(express.json())

//Define a route
app.get('/', (req,res)=>{
  res.send('<h2>Welcome to my server</h2>')
})

//about route
app.get('/about', (req,res)=>{
    res.send('<p>This is my server</p>')
  })
 /* 1️⃣ What is a POST Request?
  GET requests fetch data from the server.
  POST requests send data to the server (e.g., when submitting a form).
  We use req.body to access data sent in a POST request.*/
  
// Sample user data (temporary storage)
const users = [];
// POST route to create a user
app.post('/users', (req,res)=>{
const {name, email} = req.body;
if(!name || !email){
    res.status(400).json({message: "name and email required"})
}
const newUser = {id: users.length+1, name, email};
users.push(newUser);
res.status(201).json({message: "user added successfully", user: newUser});
})
// GET route to retrieve users
app.get('/users', (req, res) => {
    res.json(users);
  });

// PUT route update users
app.put('/users/:id', (req,res)=>{
  const {id} = req.params;
  const payload = req.body;
  const index = users.findIndex((user)=>user.id == id)
  if( index===-1){
    res.status(400).json({message:`No user found with id ${id}`})
  }
  users[index] = {...users[index],...payload};
  res.status(201).json({message:`User updated successfully`, user: users[index]})
})

//DELETE route update users
app.delete('/users/:id', (req,res)=>{
  const {id} = req.params;
  const index = users.findIndex((user)=>user.id == id)
  if( index===-1){
    res.status(400).json({message:`No user found with id ${id}`})
  }
  users.splice(index,1);
  res.status(201).json({ message: "User deleted successfully!" });

})
//start the server
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})