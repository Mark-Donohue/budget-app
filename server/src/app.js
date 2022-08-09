const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Initialize express server
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081, () => {
  console.log('Application started.');
});

// Endpoints
app.get('/status', (req, res) => {
  res.send('OK');
});

app.post('/register', (req, res) => {
  res.send({
    message: `Welcome, ${req.body.email}!`,
  });
});
