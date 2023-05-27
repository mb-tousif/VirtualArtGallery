import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./Utilities/server";

dotenv.config();
const app = express();
const port = process.env.PORT || 2023;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:#753a88'><span style='color: green'>🛢 </span>Server is successfully running 🚀</h1>"
  );
});

app.all("*", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:red; margin-top: 4rem'>🚦 Requested Route Not Found 💥</h1>"
  );
});

app.listen(port, () => {
  console.log(`Server running on PORT: 🚀 ${port}`);
});
