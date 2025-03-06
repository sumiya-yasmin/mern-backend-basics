// Custom Middleware - Logs request details
const requestLogger = (req,res,next)=>{
    console.log(`At [${new Date().toISOString()}] ${req.method} request recieved at ${req.url}`)
    next();
    }

module.exports = requestLogger;