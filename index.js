import express from 'express';
import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => res.send('Hello There the server is running'));

app.listen(PORT, () => {
  console.log(`Server Run and App Listen to Port ${PORT}`);
});
