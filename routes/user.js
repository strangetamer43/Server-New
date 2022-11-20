import express from 'express';

import { signup, signin, createUser } from '../controller/user.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post("/createUser", createUser)

export default router;