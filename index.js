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
  if (Object.keys(req.query).length === 0) {
    // Si no hay query string
    res.header('Content-Type', 'application/json');
    return res.send({ message: 'Respuesta exitosa' });
  }
  // Si existe query string
  return res.send(req.query);
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
