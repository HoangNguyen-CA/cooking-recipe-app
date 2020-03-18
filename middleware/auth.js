const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  //check for token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  //verify token
  try {
    const decoded = jwt.verify(
      token,
      process.env.jwtSecret || config.get('jwtSecret')
    );
    //Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;
