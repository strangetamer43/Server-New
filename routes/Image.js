import express from "express";
import imageUpload from "../Controllers/Image.js";
import videoUpload from "../Controllers/Video.js";
import audioUpload from "../controllers/audio.js";
const router = express.Router();

router.post("/uploadImage", imageUpload);
router.post("/uploadVideo", videoUpload)
router.post("/uploadAudio", audioUpload);

export default router;