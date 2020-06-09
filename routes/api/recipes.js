const express = require('express');
const router = express.Router();
const axios = require('axios');
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
    excluded, // array
  } = req.query;

  if (search == undefined) {
    res.status(404).json({ msg: 'search is undefined' });
  }

  let url = `https://api.edamam.com/search?q=${search}&app_id=${
    process.env.API_ID
  }&app_key=${process.env.API_KEY}${setUpParam(
    'ingr',
    ingredients
  )}${setUpParam('diet', diet)}${setUpParam('calories', calories)}${setUpParam(
    'time',
    time
  )}`;

  health
    ? health.map((healthItem) => (url += setUpParam('health', healthItem)))
    : '';

  excluded
    ? excluded.map(
        (excludedItem) => (url += setUpParam('excluded', excludedItem))
      )
    : '';

  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      const hits = data.hits; // array of objects
      res.status(200).json(hits);
    })

    .catch((err) =>
      res.status(404).json({ msg: "Error: Couldn't get recipes." })
    );
});

// @route post api/recipes
// @desc post a recipe
// @access Public
router.post('/', auth, (req, res) => {
  const id = req.user.id;
  const recipe = req.body;

  User.findById(id).then((user) => {
    user.recipes.push(recipe);
    user
      .save()
      .then(res.status(200).json(recipe))

      .catch((err) => {
        res.status(400).json({ msg: "Error: couldn't save recipe" });
      });
  });
});

// @route get api/recipes
// @desc get a user's recipe
// @access Public
router.get('/', auth, (req, res) => {
  const id = req.user.id;

  User.findById(id)
    .then((user) => {
      res.status(200).json(user.recipes);
    })

    .catch((err) => {
      res.status(404).json({ msg: "Error: couldn't get recipe" });
    });
});

// @route delete api/recipes
// @desc delete a recipe
// @access Public
router.delete('/:id', auth, (req, res) => {
  const id = req.user.id;
  const itemID = req.params.id;

  User.findById(id)
    .then((user) => {
      user.recipes.pull(itemID);
      user.save().then(res.status(200).json({ msg: 'success' }));
    })

    .catch((err) => {
      res.status(400).json({ msg: "Error: couldn't get recipe" });
    });
});

module.exports = router;
