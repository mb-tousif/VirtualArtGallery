import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const URL = process.env.MONGODB_CONNECTION_URL || '';

mongoose.set("strictQuery", true);

const ConnectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(URL);
    console.log("🗂️ MongoDB Server is Running");
  } catch (error) {
    console.log("💥 Error while connecting with DB 🚦");
    // console.log(error);
  }
};

export default ConnectDB;