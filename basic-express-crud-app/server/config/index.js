require('dotenv').config();


const config = {
  PORT: process.env.PORT,
  db: {
    MONGO_URI: process.env.MongoUserURI,
    Mongo_DBName: process.env.dbName,
  },
  CORS: {
    ORIGIN: process.env.CORS_ORIGIN
  }
};



module.exports = config;
