import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (res, req) => {
  //check exisiting user
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
  db.query(q, [req.body, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.json('User already exists');

    // has to password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO users (`username`, `email`, `password`)VALUES (?) ';
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json('User created');
    });
  });
};
export const login = (req, res) => {};

export const logout = (req, res) => {};
