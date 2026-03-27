const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'CI is working!' });
});

module.exports = app;