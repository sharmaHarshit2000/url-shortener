import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server is running on http://localhost:${PORT}`);
