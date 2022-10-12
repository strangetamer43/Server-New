import express from "express";
import { createFollowers, getFollowers, deleteFollowers } from "../controller/followers.js";
import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/', getFollowers);
router.post('/', createFollowers);
router.delete('/:id', auth, deleteFollowers);



export default router;