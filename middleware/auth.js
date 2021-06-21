const jwt = require('jsonwebtoken');
const AppError = require('../AppError');
const jwtSecret = process.env.jwtSecret;

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  //check for token
  if (!token) return next(new AppError(401, 'No token, authorization denied.'));

  //verify token
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded; //Add user to request object
    next();
  } catch (e) {
    next(new AppError(400, 'Token is not valid.'));
  }
}

module.exports = auth;
