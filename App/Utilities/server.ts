import dotenv from 'dotenv';
import mongoose from 'mongoose';
import config from '../Config/index'
dotenv.config();
const URL = config.url as string;

mongoose.set("strictQuery", true);

const ConnectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(URL);
    console.log(`🗂️ MongoDB Server connected`);
  } catch (error) {
    console.log("💥 Error while connecting with mongoDB 🚦");
    // console.log(error);
  }
};

export default ConnectDB;