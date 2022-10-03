import express from 'express';
import { addPost } from '../controlers/post.js';

const router = express.Router();

// pulls from controlers
router.get('/test', addPost);

export default router;
