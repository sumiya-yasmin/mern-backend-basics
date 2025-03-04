const express = require('express');
const app = express();
const config = require('./config');

const port = config.PORT

const { userRouter } = require('./routes');
const configureRouter = require('./routes');
const { errorHandler, requestLogger } = require('./middlewares');

const connectDB = require('./db');

//connect database
connectDB();

// Apply middleware globally
app.use(requestLogger)

// Built in Middleware to parse JSON requests
app.use(express.json())

configureRouter(app)
app.use(errorHandler)
//start the server
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})