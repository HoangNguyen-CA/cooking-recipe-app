const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const jwtSecret = process.env.jwtSecret;

const { wrapAsync } = require('../../util');
const AppError = require('../../AppError');

const User = require('../../models/User');

// @route POST api/auth
// @desc Authenticate an user (LOGIN)
// @access Public
router.post(
  '/',
  wrapAsync(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError(400, 'Please enter all fields.');
    }

    const foundUser = await User.findOne({ email: email });
    if (!foundUser) throw new AppError(400, 'User does not exist.');

    //validate password
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) throw new AppError(400, 'Invalid Credentials.');
    jwt.sign(
      {
        id: foundUser.id,
      },
      jwtSecret,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
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
  })
);

// @route GET api/auth/user
// @desc Gets user data
// @access private
router.get(
  '/user',
  auth,
  wrapAsync(async (req, res) => {
    const foundUser = await User.findById(req.user.id).select('-password');
    res.json(foundUser);
  })
);

module.exports = router;
