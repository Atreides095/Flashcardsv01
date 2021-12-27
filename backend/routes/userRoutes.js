import express from 'express';
import {
    getUser,
    getAllDecksFromUser,
    getSingleDeckFromUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:userId').get(protect, getUser);

router.route('/:userId/decks/').get(protect, getAllDecksFromUser);

router.route('/:userId/decks/:deckId').get(protect, getSingleDeckFromUser);

export default router;
