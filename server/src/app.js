const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const {sequelize} = require('./models');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

// Initialize database and server
sequelize.sync()
    .then(() => {
      app.listen(config.port);
      console.log(`\n --> Application started on port: ${config.port}`);
    });
