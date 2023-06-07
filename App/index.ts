import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./Utilities/server";
import router from "./Routes/routes";
import config from "./Config/index";
import { infoLogger } from "./Shared/Logger";
import globalErrorHandler from "./middleware/globalErrorHandling";

dotenv.config();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:#753a88'><span style='color: green'>🛢 </span>Server is successfully running 🚀</h1>"
  );
});

app.use("/api/v1", router);

app.listen(config.port, () => {
  infoLogger.info(`Server running on port: ${config.port} 🚀`);
});

app.all("*", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:red; margin-top: 4rem'>🚦 Requested Route Not Found 💥</h1>"
  );
});

app.use(globalErrorHandler);