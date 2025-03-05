const requestLogger = require('./logMiddleware')
const errorHandler = require('./errorHandlerMiddleware')
const validatePayload = require('./validationMiddleware')
module.exports = {
    errorHandler,
    requestLogger,
    validatePayload
}