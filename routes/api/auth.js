const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const AppError = require('../../AppError');

const jwtSecret = process.env.jwtSecret || 'secret';

const User = require('../../models/User');

// @route POST api/auth
// @desc Authenticate an user (LOGIN)
// @access Public
router.post('/', async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError(400, 'Please enter all fields.'));
  }

  const foundUser = await User.findOne({ email: email });
  if (!foundUser) next(new AppError(400, 'User does not exist.'));

  //validate password
  const isMatch = await bcrypt.compare(password, foundUser.password);
  if (!isMatch) next(new AppError(400, 'Invalid Credentials.'));
  jwt.sign(
    {
      id: foundUser.id,
    },
    jwtSecret,
    { expiresIn: 3600 },
    (err, token) => {
      if (err) next(err);
      res.json({
        token: token,
        user: {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
        },
      });
    }
  );
});

// @route GET api/auth/user
// @desc Gets user data
// @access private
router.get('/user', auth, async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.user.id).select('-password');
    res.json(foundUser);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
