module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send('OK');
  });

  app.post('/register', (req, res) => {
    res.send({
      message: `Welcome, ${req.body.email}!`,
    });
  });
};
