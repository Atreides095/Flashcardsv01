import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

import ConnectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import accountRoutes from './routes/accountRoutes.js';
import {
    notFound,
    errorHandler,
} from './middleware/errorHandlingMiddleware.js';

dotenv.config();
const app = express();
ConnectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

// Routes
app.use('/api/accounts', accountRoutes);
app.use('/api/users', userRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold));
