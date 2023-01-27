import express from "express";
import { getContestsBySearch, getContests, getContest, createContest, updateContest, deleteContest, likeContest, disLikeContest, commentContest, registeredUser, getContestsLazyLoading } from "../controllers/contests.js";
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search', getContestsBySearch);
router.get('/', getContests);
router.get('/:id', getContest)
router.post('/', auth, createContest);
router.patch('/:id', auth, updateContest);
router.delete('/:id', auth, deleteContest);
router.patch('/:id/likeContest', auth, likeContest);
router.post('/:id/commentContest', auth, commentContest);
router.patch('/:id/disLikeContest', auth, disLikeContest);
router.patch('/:id/registeredUser', auth, registeredUser);
router.post("/getContestRange", getContestsLazyLoading)



export default router;