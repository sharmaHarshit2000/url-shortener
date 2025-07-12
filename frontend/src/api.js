import axios from "axios";
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ,
});

export const shortenUrl = (url) => API.post("/api/shorten", { url });

export const getAnalytics = (code) => API.get(`/api/analytics/${code}`);
