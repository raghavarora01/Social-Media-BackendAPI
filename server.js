import express from 'express';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js';
import cookieParser from 'cookie-parser';
import followRoutes from './routes/follow.js';
import likeRoutes from './routes/likes.js';
import commentRoutes from './routes/comments.js';

import authMiddleware from './midldewares/authMiddleware'; // Assuming this is where your middleware is

const app = express();
const PORT = 9000;
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/post', authMiddleware, postRoutes);
app.use('/api/follow',followRoutes); 
app.use('/api/likes',likeRoutes);
app.use("/api/comments",commentRoutes);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});