const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: 'Não autorizado' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send({ message: 'Não autorizado' });
  }
  jwt.verify(token, process.env.SECRET, (error, user) => {
    if (error) {
      return res.status(401).send({ message: 'Não autorizado' });
    }
    req.user = user;
    next();
  });
};

module.exports = auth;
