const express = require('express');
const config = require('./config');
const cors = require('cors')
const app = express();
const pinoHttp = require('pino-http')

const port = config.PORT

const configureRouter = require('./routes');
const { errorHandler} = require('./middlewares');

const connectDB = require('./db');
const limiter = require('./config/rateLimit');
const logger = require('./config/logger');


app.use(pinoHttp({logger}))

app.use(cors(config.CORS.ORIGIN))

app.use(limiter)
//connect database
connectDB();
app.use(express.json())
// Apply middleware globally

// app.use(requestLogger)//we dont need log middleware since we are using pino logger

// Built in Middleware to parse JSON requests

configureRouter(app)
app.use(errorHandler)
//start the server
app.listen(port, ()=>{
    logger.info(`Server is running at port ${port}`);
})