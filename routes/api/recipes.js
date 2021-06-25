const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../../middleware/auth');

const AppError = require('../../AppError');
const { wrapAsync } = require('../../util');

const User = require('../../models/User');

/* Required for API syntax */
const kebabize = (str) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  );

// @route GET api/recipes/edamam
// @desc Search recipes from API
// @access Public
router.get(
  '/edamam',
  wrapAsync(async (req, res) => {
    const {
      search = '',
      ingredients, //int
      diet,
      calories,
      time,
      health = [], // array
      excluded = [], // array
    } = req.query;

    if (search == '') throw new AppError(404, 'Search is empty or undefined.');

    //TODO: HIDE API KEYS
    const params = new URLSearchParams({
      q: search,
      app_id: process.env.API_ID,
      app_key: process.env.API_KEY,
    });
    if (ingredients) params.append('ingr', ingredients);
    if (diet) params.append('diet', kebabize(diet));
    if (calories) params.append('calories', calories);
    if (time) params.append('time', time);
    for (const item of health) params.append('health', kebabize(item));
    for (const item of excluded) params.append('excluded', item);

    console.log(params);
    try {
      const response = await axios.get(`https://api.edamam.com/search`, {
        params,
      });
      const data = response.data;
      const hits = data.hits; // array of objects
      res.json(hits);
    } catch (e) {
      // log error
      console.dir(e);
      throw e;
    }
  })
);

// @route post api/recipes
// @desc post a recipe
// @access Public
router.post(
  '/',
  auth,
  wrapAsync(async (req, res) => {
    const id = req.user.id;
    const recipe = req.body;
    const foundUser = await User.findById(id);
    foundUser.recipes.push(recipe);
    const savedUser = await foundUser.save();
    if (savedUser == null) throw new AppError(404, 'Failed to save user data.');
    res.json(recipe);
  })
);

// @route get api/recipes
// @desc get a user's recipes
// @access Public
router.get(
  '/',
  auth,
  wrapAsync(async (req, res) => {
    const id = req.user.id;
    const foundUser = await User.findById(id);
    if (foundUser == null) throw new AppError(400, 'Failed to get user.');
    res.json(foundUser.recipes);
  })
);

// @route delete api/recipes
// @desc delete a recipe
// @access Public
router.delete(
  '/:id',
  auth,
  wrapAsync(async (req, res) => {
    const id = req.user.id;
    const itemID = req.params.id;
    const foundUser = await User.findById(id);
    foundUser.recipes.pull(itemID);
    const savedUser = await foundUser.save();
    if (savedUser == null) throw new AppError(404, 'Failed to save user data.');
    res.json({ msg: 'success' });
  })
);

module.exports = router;
