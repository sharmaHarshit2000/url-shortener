import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import urlRoutes from './routes/urlRoutes.js';


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/', urlRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server is running on http://localhost:${PORT}`);
