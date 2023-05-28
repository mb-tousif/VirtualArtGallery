import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
const port = process.env.PORT || 2023;
const app = express();
const URL = process.env.MONGODB_CONNECTION_URL || '';

mongoose.set("strictQuery", true);

const ConnectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(URL);
    app.listen(port, () => {
      console.log(`🗂️ MongoDB Server running on port: 🚀 ${port}`);
    });
  } catch (error) {
    console.log("💥 Error while connecting with mongoDB 🚦");
    // console.log(error);
  }
};

export default ConnectDB;