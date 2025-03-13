//Connect database
const mongoose =require('mongoose');
const config = require('./config');
const logger = require('./config/logger');


const connectDB = async()=>{
    logger.info("Connecting Mongodb")
    try {
        await mongoose.connect(config.db.MONGO_URI, {
            dbName: config.db.Mongo_DBName
        });
        logger.info("Mongodb Connected Successfully");
    } catch (error) {
        logger.error(`Mongodb connection Failed ${error}`)
    }
}

module.exports = connectDB;

//then cathch can also be used
/*const connectDB = () =>{
    console.log("Connecting Mongodb")
    mongoose.connect(MONGO_URI, {
        dbName: Mongo_DBName
    }).then(()=>{
        console.log("Mongodb Connected Successfully")
    }).catch((err)=> console.error(`Mongodb connection Failed ${err}`));
}*/