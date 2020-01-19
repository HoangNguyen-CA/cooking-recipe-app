const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');

// @route GET api/locations
// @desc Get all locations
// @access Public

const setUpParam = (paramName, param) => {
  return param ? `&${paramName}=${param}` : '';
};

router.get('/', (req, res) => {
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
  )}${setUpParam('diet', diet)}${health.map(healthItem =>
    setUpParam('health', healthItem)
  )}${setUpParam('calories', calories)}${setUpParam(
    'time',
    time
  )}${excluded.map(excludedItem => setUpParam('excluded', excludedItem))}`;

  axios
    .get(url)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => res.status(404).send(err));
});

module.exports = router;
