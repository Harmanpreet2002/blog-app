const mongoose = require("mongoose");
const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
} = require("../config/config");

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = async () => {
  try {
    const connect = await mongoose.connect(mongoURL);
    console.log(`Database connected`);
  } catch (error) {
    console.log(error);
    setTimeout(connectDB, 3000);
  }
};

module.exports = connectWithRetry;
