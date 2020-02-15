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
  } = req.body;

  const url = `https://api.edamam.com/search?q=${search}&app_id=${config.get(
    'apiID'
  )}&app_key=${config.get('apiKey')}${setUpParam(
    'ingr',
    ingredients
  )}${setUpParam('diet', diet)}${
    health ? health.map(healthItem => setUpParam('health', healthItem)) : ''
  }${setUpParam('calories', calories)}${setUpParam('time', time)}${
    excluded
      ? excluded.map(excludedItem => setUpParam('excluded', excludedItem))
      : ''
  }`;

  axios
    .get(url)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => res.status(404).send(err));
});

// @route Post api/recipes
// @desc post a recipe
// @access Public
router.post('/', auth, (req, res) => {
  const id = req.user.id;
  const name = req.body.name;

  User.findById(id)
    .then(user => {
      user.recipes.push({ name: name });
      user
        .save()
        .then(res.status(200).json({ success: 'true' }))
        .catch(err => {
          res.status(404).json({ success: 'false' });
        });
    })
    .catch(err => {
      res.status(404).json({ success: 'false' });
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

// @route Post api/recipes
// @desc post a recipe
// @access Public
router.delete('/:id', auth, (req, res) => {
  const id = req.user.id;
  const itemID = req.params.id;
  User.findById(id)
    .then(user => {
      user.recipes.pull(itemID);
      user
        .save()
        .then(res.status(200).json({ success: 'true' }))
        .catch(err => res.status(404).json({ success: 'false' }));
    })
    .catch(err => {
      res.status(404).json({ success: 'false' });
    });
});

module.exports = router;
