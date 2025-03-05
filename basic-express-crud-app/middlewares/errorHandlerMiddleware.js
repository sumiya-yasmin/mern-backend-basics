const { mongoose } = require("mongoose");
const { NotFoundError } = require("../errors");
const { z } = require("zod");

const errorHandler = (err,req,res,next) =>{
console.error(err.stack);
if(err instanceof z.ZodError){
    res.status(400).send(err.message)
}
if(err instanceof NotFoundError){
    res.status(400).send(err.message)
}
if (err instanceof mongoose.Error.ValidationError || err instanceof mongoose.Error.CastError){
    res.status(400).send(err.message)
}
res.status(500).send(`Internal Server ERror`)
}
module.exports = errorHandler;