import express from 'express';
import authRouter from './routes/auth.js';
import postRouter from './routes/posts.js';
import userRouter from './routes/users.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    console.log('1');
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  console.log('2');
  const file = req.file;
  console.log(file.filename);
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/posts', postRouter);

app.listen(8800, () => {
  console.log('Connected to 8800 port!');
});
