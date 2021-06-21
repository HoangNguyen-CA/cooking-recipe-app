const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AppError = require('../../AppError');
const jwtSecret = process.env.jwtSecret;

const User = require('../../models/User');

// @route POST api/users
// @desc Register a new user
// @access Public
router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new AppError(400, 'Please enter all fields.'));
  }

  const foundUser = await User.findOne({ email: email });
  if (foundUser) return next(new AppError(400, 'User already exists.'));

  const newUser = new User({
    name,
    email,
    password,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) return next(err);
      newUser.password = hash;
      const savedUser = await newUser.save();
      jwt.sign(
        {
          id: savedUser.id,
        },
        jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) next(err);

          const payload = {
            token: token,
            user: {
              id: savedUser.id,
              name: savedUser.name,
              email: savedUser.email,
            },
          };

          res.json(payload);
        }
      );
    });
  });
});

module.exports = router;
