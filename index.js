require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan(':method :url :status'));

app.get('/', (req, res) => {
  res.header('Content-Type', 'text/html');
  res.send('Ruta principal');
});

app.get('/hola', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(400);
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
