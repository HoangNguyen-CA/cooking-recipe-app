const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../../middleware/auth');
const AppError = require('../../AppError');

const User = require('../../models/User');

// @route GET api/recipes/edamam
// @desc Search recipes from API
// @access Public
router.get('/edamam', async (req, res, next) => {
  const {
    search = '',
    ingredients, //int
    diet,
    calories,
    time,
    health = [], // array
    excluded = [], // array
  } = req.query;

  if (search == '')
    return next(new AppError(404, 'Search is empty or undefined.'));

  //TODO: HIDE API KEYS
  const params = new URLSearchParams({
    q: search,
    app_id: process.env.API_ID,
    app_key: process.env.API_KEY,
  });
  if (ingredients) params.append('ingr', ingredients);
  if (diet) params.append('diet', diet);
  if (calories) params.append('calories', calories);
  if (time) params.append('time', time);
  for (const item of health) params.append('health', item);
  for (const item of excluded) params.append('excluded', item);

  try {
    const response = await axios.get(`https://api.edamam.com/search`, {
      params,
    });
    const data = response.data;
    const hits = data.hits; // array of objects
    res.json(hits);
  } catch (e) {
    next(e);
  }
});

// @route post api/recipes
// @desc post a recipe
// @access Public
router.post('/', auth, async (req, res, next) => {
  try {
    const id = req.user.id;
    const recipe = req.body;
    const foundUser = await User.findById(id);
    foundUser.recipes.push(recipe);
    const savedUser = await foundUser.save();
    if (savedUser == null) throw new AppError(404, 'Failed to save user data.');
    res.json(recipe);
  } catch (e) {
    next(e);
  }
});

// @route get api/recipes
// @desc get a user's recipes
// @access Public
router.get('/', auth, async (req, res, next) => {
  try {
    const id = req.user.id;
    const foundUser = await User.findById(id);
    if (foundUser == null) throw new AppError(400, 'Failed to get user.');
    res.json(foundUser.recipes);
  } catch (e) {
    next(e);
  }
});

// @route delete api/recipes
// @desc delete a recipe
// @access Public
router.delete('/:id', auth, async (req, res, next) => {
  try {
    const id = req.user.id;
    const itemID = req.params.id;
    const foundUser = await User.findById(id);
    foundUser.recipes.pull(itemID);
    const savedUser = await foundUser.save();
    if (savedUser == null) throw new AppError(404, 'Failed to save user data.');
    res.json({ msg: 'success' });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
