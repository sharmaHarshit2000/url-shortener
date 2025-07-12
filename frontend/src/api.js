import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const shortenUrl = (url) => API.post("/api/shorten", { url });

export const getAnalytics = (code) => API.get(`/api/analytics/${code}`);
