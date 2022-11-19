import express from "express";
import imageUpload from "../Controller/Image.js";
import videoUpload from "../Controller/Video.js";
const router = express.Router();

router.post("/uploadImage", imageUpload);
router.post("/uploadVideo", videoUpload)

export default router;