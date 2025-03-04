require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  db: {
    MONGO_URI: process.env.MongoUserURI,
    Mongo_DBName: process.env.dbName,
  },
};

module.exports = config;
