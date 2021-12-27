import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Fetch user info
// @route   GET /api/users/:id
export const getUser = asyncHandler(async (req, res) => {
    const paramsId = req.params.userId;

    if (mongoose.Types.ObjectId.isValid(paramsId)) {
        const user = await User.findById(paramsId);
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Fetch all decks from a user
// @route   GET /api/users/:id/decks
export const getAllDecksFromUser = asyncHandler(async (req, res) => {
    const paramsId = req.params.userId;

    if (mongoose.Types.ObjectId.isValid(paramsId)) {
        const decks = await User.findById(paramsId).select('decks');
        res.json(decks);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Fetch a single deck
// @route   GET /api/users/:id/decks/:id
export const getSingleDeckFromUser = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const deckId = req.params.deckId;

    if (
        mongoose.Types.ObjectId.isValid(userId) &&
        mongoose.Types.ObjectId.isValid(deckId)
    ) {
        const deck = await User.findOne({ _id: userId }).select({
            decks: { $elemMatch: { _id: deckId } },
        });

        res.json(deck.decks[0]);
    } else {
        res.status(404);
        throw new Error('User or Deck not found');
    }
});
