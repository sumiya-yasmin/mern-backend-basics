const express = require('express');
const { userRouter } = require('./routes');
const configureRouter = require('./routes');
const app = express();
const port = 1000;


// Custom Middleware - Logs request details
const requestLogger = (req,res,next)=>{
console.log(`At [${new Date().toISOString()}] ${req.method} request recieved at ${req.url}`)
next();
}

// Apply middleware globally
app.use(requestLogger)

// Built in Middleware to parse JSON requests
app.use(express.json())

configureRouter(app)
 
//start the server
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})