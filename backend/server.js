import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// for testing purpose
app.get("/", (req, res) => {
  res.send("URL Shortener API is running");
});

app.use("/", urlRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server is running on http://localhost:${PORT}`);
