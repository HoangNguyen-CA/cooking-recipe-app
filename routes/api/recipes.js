const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route GET api/recipes
// @desc Get all recipes
// @access Public

const setUpParam = (paramName, param) => {
  return param ? `&${paramName}=${param}` : '';
};

router.get('/edamam', (req, res) => {
  const {
    search,
    ingredients, //int
    diet,
    health, // array
    calories,
    time,
    excluded // array
  } = req.query;

  if (search == undefined) {
    res.status(404).json({ msg: 'search is undefined' });
  }

  let url = `https://api.edamam.com/search?q=${search}&app_id=${config.get(
    'apiID'
  )}&app_key=${config.get('apiKey')}${setUpParam(
    'ingr',
    ingredients
  )}${setUpParam('diet', diet)}${setUpParam('calories', calories)}${setUpParam(
    'time',
    time
  )}`;

  health
    ? health.map(healthItem => (url += setUpParam('health', healthItem)))
    : '';

  excluded
    ? excluded.map(
        excludedItem => (url += setUpParam('excluded', excludedItem))
      )
    : '';

  console.log(url);
  axios
    .get(url)
    .then(response => {
      const data = response.data;
      const hits = data.hits; // array of objects
      res.status(200).json(hits);
    })
    .catch(err => res.status(404).send(err));
});

// @route Post api/recipes
// @desc post a recipe
// @access Public
router.post('/', auth, (req, res) => {
  const id = req.user.id;
  const recipe = req.body;

  User.findById(id).then(user => {
    user.recipes.push(recipe);
    user.save().then(res.status(200).json(recipe));
  });
});

// @route get api/recipes
// @desc get a user's recipe
// @access Public
router.get('/', auth, (req, res) => {
  const id = req.user.id;
  User.findById(id)
    .then(user => {
      res.status(200).json(user.recipes);
    })
    .catch(err => {
      res.status(404).json({ success: 'false' });
    });
});

// @route Delete api/recipes
// @desc delete a recipe
// @access Public
router.delete('/:id', auth, (req, res) => {
  const id = req.user.id;
  const itemID = req.params.id;
  User.findById(id)
    .then(user => {
      user.recipes.pull(itemID);
      user.save().then(res.status(200).json({ success: 'true' }));
    })
    .catch(err => {
      res.status(404).json({ success: 'false' });
    });
});

module.exports = router;
