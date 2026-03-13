import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello There the server is running'));

app.listen('3000', () => {
  console.log('Server Run and App Listen to Port 3000');
});
