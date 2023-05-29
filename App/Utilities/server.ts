import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const URL = process.env.MONGODB_CONNECTION_URL || '';

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