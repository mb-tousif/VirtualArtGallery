import dotenv from 'dotenv';
import mongoose from 'mongoose';
import config from '../Config/index'
import { infoLogger, errorLogger } from '../Shared/Logger';
dotenv.config();
const URL = config.url as string;

mongoose.set("strictQuery", true);

const ConnectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(URL);
    infoLogger.info(`🗂️ MongoDB Server connected`);
  } catch (error) {
    errorLogger.error(error);
    // console.log("💥 Error while connecting with mongoDB 🚦");
    // console.log(error);
  }
};

export default ConnectDB;