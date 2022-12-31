import express from 'express';
import { signup, signin, createUser, getSpecificUser, addFollower, removerFollower } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.post("/createUser", createUser)
router.post("/userSpecific", getSpecificUser)
router.post("/follow", auth, addFollower)
router.post("/unfollow", auth, removerFollower)

export default router;