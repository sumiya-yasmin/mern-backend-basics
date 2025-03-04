//Connect database
const mongoose =require('mongoose');
const config = require('./config');


const connectDB = async()=>{
    console.log("Connecting Mongodb")
    try {
        await mongoose.connect(config.db.MONGO_URI, {
            dbName: config.db.Mongo_DBName
        });
        console.log("Mongodb Connected Successfully");
    } catch (error) {
        console.error(`Mongodb connection Failed ${error}`)
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