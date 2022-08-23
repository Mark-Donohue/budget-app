const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string(),
    }).with('email', 'password');

    const {error} = schema.validate(req.body);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Invalid email address provided.',
          });
          break;
        case 'password':
          res.status(400).send({
            error: 'Invalid password provided.',
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information.',
          });
      }
    } else {
      next();
    }
  },
};
