import express from "express";
import cors from "cors";
import httpStatus from 'http-status';
import dotenv from "dotenv";
import ConnectDB from "./App/Utilities/server";
import router from "./App/Routes";
import { infoLogger } from "./App/Shared/Logger";
import Config from "./App/Config";
import globalErrorHandler from "./App/middleware/globalErrorHandling";

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

app.listen(Config.port, () => {
  infoLogger.info(`Server running on port: ${Config.port} 🚀`);
});

app.use(globalErrorHandler);

app.all("*", (req, res) => {
 res.status(httpStatus.NOT_FOUND).json({
    status: "fail",
    message: `🚦 Requested ${req.originalUrl} this Route Not Found 💥`,
 });
});