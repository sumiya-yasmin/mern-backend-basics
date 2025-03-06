const express = require('express');
const config = require('./config');
const cors = require('cors')
const app = express();

const { default: rateLimit } = require('express-rate-limit');

const port = config.PORT

const configureRouter = require('./routes');
const { errorHandler, requestLogger } = require('./middlewares');

const connectDB = require('./db');


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})
app.use(cors(config.CORS.ORIGIN))

app.use(limiter)
//connect database
connectDB();
app.use(express.json())
// Apply middleware globally
app.use(requestLogger)

// Built in Middleware to parse JSON requests

configureRouter(app)
app.use(errorHandler)
//start the server
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})