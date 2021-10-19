import express from 'express';
import { getAllBooks, addBook, registerUser } from '../controllers/books.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/addBook', addBook);
router.post('/signup', registerUser);

export default router; 