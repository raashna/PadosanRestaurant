import express from "express";
import { getImagesByDestination, storeImage } from "../controllers/uploadController.js";

const router = express.Router();

// POST /api/admin/upload - Save image URL to MongoDB
router.post("/", storeImage);

// GET /api/admin/upload/:destination - Fetch images by destination
router.get("/:destination", getImagesByDestination);

export default router;