import express from "express";

import { redirectUrl, shortenUrl } from "../controllers/urlController.js";

const router = express.Router();

router.post("/api/shorten", shortenUrl);
router.get("/:code", redirectUrl);

export default router;