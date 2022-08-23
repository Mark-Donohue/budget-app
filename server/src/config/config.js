const path = require('path');

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'budget-app',
    user: process.env.DB_USER || 'budget-app',
    password: process.env.DB_PASS || 'budget-app',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../budget-app.sqlite'),
    },
  },
};
