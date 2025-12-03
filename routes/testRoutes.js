import express from "express";
import { createTestData, getTestData } from "../controllers/testController.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.post("/", asyncHandler(createTestData));
router.get("/", asyncHandler(getTestData));

export default router;
