import express from "express";

import { analytics, redirectUrl, shortenUrl } from "../controllers/urlController.js";

const router = express.Router();

router.post("/api/shorten", shortenUrl);
router.get("/api/analytics/:code", analytics);
router.get("/:code", redirectUrl);

export default router;
