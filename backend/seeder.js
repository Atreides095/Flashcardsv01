import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import { users } from './data/users.js';
import User from './models/userModel.js';
import connectDB from './config/db.js';
import bcrypt from 'bcryptjs';

dotenv.config();
connectDB();

const importData = async () => {
    try {
        const newUsers = users.map((user) => ({
            ...user,
            password: bcrypt.hashSync(user.password, 10),
        }));

        await Promise.all([User.deleteMany()]);

        const createdUsers = await User.insertMany(newUsers);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Promise.all([User.deleteMany()]);

        console.log('Data destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
