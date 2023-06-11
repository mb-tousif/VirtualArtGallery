import { Server } from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
import config from "../Config/index";
import { infoLogger, errorLogger } from "../Shared/Logger";
dotenv.config();
const URL = config.url as string;

process.on("uncaughtException", (error) => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

mongoose.set("strictQuery", true);

const ConnectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(URL);
    infoLogger.info(`🗂️ MongoDB Server connected`);
  } catch (error) {
    errorLogger.error(error);
  }
  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

process.on("SIGTERM", async () => {
  console.log("Received SIGTERM signal. Gracefully shutting down...");
  // Close database connections. This example uses mongoose but this could be any connection to MongoDB.
  infoLogger.info("🗂️ MongoDB Server disconnected");
  await mongoose.connection.close();
  if (server) {
    server.close(() => {
      errorLogger.error("Process terminated");
    });
  } else {
    process.exit(1);
  }
  process.exit(0);
});

export default ConnectDB;