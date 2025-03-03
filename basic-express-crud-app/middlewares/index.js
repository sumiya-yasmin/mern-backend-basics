const requestLogger = require('./logMiddleware')
const errorHandler = require('./errorHandlerMiddleware')
module.exports = {
    errorHandler,
    requestLogger
}