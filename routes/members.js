import express from 'express';
import { addUser, getAllMembers, updateUser } from "../controllers/members.js"

const router = express.Router();

router.get('/', getAllMembers);
router.post('/add', addUser);

export default router; 