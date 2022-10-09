import express from 'express';
import {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
} from '../controlers/post.js';

const router = express.Router();

// pulls from controlers
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', addPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);

export default router;
