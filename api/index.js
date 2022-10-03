import express from 'express';

const app = express();

app.use(express.json());

app.listen(8800, () => {
  console.log('Connected to 8800 port!');
});

// docker compose up
//docker compose down

// prvi na 55:42
