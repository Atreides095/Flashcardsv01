import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

// @desc    Create accounts
// @route   POST /api/accounts/new
export const createAccount = asyncHandler(async (req, res, next) => {
    const { userName, password } = req.body;

    const existingUser = await User.findOne({ userName });

    if (existingUser) {
        res.status(400);
        next(new Error('User already exists'));
    } else {
        const newPassword = await bcrypt.hash(password, 10);

        const createdUser = new User({ userName, password: newPassword });
        await createdUser.save();

        res.status(201).json({ createdUser });
    }
});

// @desc    Auth User
// @route   POST /api/accounts/login
export const authUser = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            userName: user.userName,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('incorrect username or password');
    }
});
