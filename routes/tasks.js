import express from "express";
import { getTasks, getTask, createTask, updateTask, registerTask, completeTask } from "../controllers/tasks.js";
import auth from '../middleware/auth.js';


const router = express.Router();


router.get('/', getTasks );
router.get('/:id', getTask);

router.post('/', auth, createTask);

router.patch('/:id', auth, updateTask);

router.patch('/:id/registerTask', auth, registerTask);

router.patch('/:id/completeTask', auth, completeTask);

export default router;