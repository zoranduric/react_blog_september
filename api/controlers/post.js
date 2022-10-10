import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const getPosts = (req, res) => {
  const q = req.query.category
    ? 'SELECT * FROM posts WHERE category=?'
    : 'SELECT * FROM posts';

  db.query(q, [req.query.category], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const q =
    'SELECT p.id, `username`, `title`, `content`, p.image, u.image AS userImg, `category`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ';

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  res.json('post controler');
};
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json('message: Unauthorized');
  jwt.verify(token, 'jwtkey', (error, userInfo) => {
    if (error) return res.status(403).json('not valid token');
    const postId = req.params.id;
    const q = 'DELETE FROM posts WHERE id=? AND uid=?';
    db.query(q, [postId, userInfo.id], (error, data) => {
      if (error) return res.status(403).json(error);
      return res.json('post deleted');
    });
  });
};
export const updatePost = (req, res) => {
  res.json('post controler');
};
