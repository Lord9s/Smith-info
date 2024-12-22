// server.js
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.post('/', (req, res) => {
  res.send('Thanks for the POST request!');
});
