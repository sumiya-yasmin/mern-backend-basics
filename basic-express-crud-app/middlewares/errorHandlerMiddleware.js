const { NotFoundError } = require("../errors");

const errorHandler = (err,req,res,next) =>{
console.error(err.stack);
if(err instanceof NotFoundError){
    res.status(400).send(err.message)
}
res.status(500).send(`Internal Server ERror`)
}
module.exports = errorHandler;