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
  console.log(url);

  /*
  axios
    .get(url)
    .then(response => {
      const data = response.data;
      const hits = data.hits; // array of objects
      res.status(200).json(hits);
    })
    .catch(err => res.status(404).send(err));
    */
  res.status(200).json([
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_1b6dfeaf0988f96b187c7c9bb69a14fa',
        label: 'Pizza Dough',
        image:
          'https://www.edamam.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487.jpg',
        source: 'Lottie + Doof',
        url:
          'http://www.lottieanddoof.com/2010/01/pizza-pulp-fiction-jim-lahey/',
        shareAs:
          'http://www.edamam.com/recipe/pizza-dough-1b6dfeaf0988f96b187c7c9bb69a14fa/pizza',
        yield: 4,
        dietLabels: [],
        healthLabels: [
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        cautions: [],
        ingredientLines: [
          '500 g bread flour(3 3/4 cups)',
          '2 1/2 tsp Dry Yeast instant or active (10 grams)',
          '3/4 tsp Table Salt(5 grams)',
          '3/4 tsp Sugar, plus a pinch (about 3 grams)',
          '1 1/2 cup water at room temperature',
          'extra-virgin olive oil for pans',
          '2 x yellow onions(medium), finely chopped (pizza cipolla)',
          '1/3 cup Heavy Cream(pizza cipolla)',
          '1 tsp Kosher Salt(pizza cipolla)',
          '2 tsp fresh thyme, coarsely chopped(pizza cipolla)',
          '7 oz diced tomatoes, drained(pizza pomodoro)',
          '3/4 cup Canned Tomatoes (reserved juice) (pizza pomodoro)',
          '2 tsp Extra Virgin Olive Oil(pizza pomodoro)',
          '1/2 tsp Kosher Salt(pizza pomodoro)',
          '1 pinch Red Pepper Flakes(pizza pomodoro)',
          '8 x fresh basil (large leaves), chopped(pizza pomodoro)'
        ],
        ingredients: [
          {
            text: '500 g bread flour(3 3/4 cups)',
            weight: 513.75
          },
          {
            text: '2 1/2 tsp Dry Yeast instant or active (10 grams)',
            weight: 10
          },
          {
            text: '3/4 tsp Table Salt(5 grams)',
            weight: 5
          },
          {
            text: '3/4 tsp Sugar, plus a pinch (about 3 grams)',
            weight: 3.1500000000000004
          },
          {
            text: '3/4 tsp Sugar, plus a pinch (about 3 grams)',
            weight: 3
          },
          {
            text: '1 1/2 cup water at room temperature',
            weight: 355.5
          },
          {
            text: 'extra-virgin olive oil for pans',
            weight: 21.993052934838357
          },
          {
            text: '2 x yellow onions(medium), finely chopped (pizza cipolla)',
            weight: 250
          },
          {
            text: '1/3 cup Heavy Cream(pizza cipolla)',
            weight: 79.33333333333333
          },
          {
            text: '1 tsp Kosher Salt(pizza cipolla)',
            weight: 4.854166666912875
          },
          {
            text: '2 tsp fresh thyme, coarsely chopped(pizza cipolla)',
            weight: 1.6
          },
          {
            text: '7 oz diced tomatoes, drained(pizza pomodoro)',
            weight: 198.44666187500002
          },
          {
            text: '3/4 cup Canned Tomatoes (reserved juice) (pizza pomodoro)',
            weight: 180
          },
          {
            text: '2 tsp Extra Virgin Olive Oil(pizza pomodoro)',
            weight: 9
          },
          {
            text: '1/2 tsp Kosher Salt(pizza pomodoro)',
            weight: 2.4270833334564377
          },
          {
            text: '1 pinch Red Pepper Flakes(pizza pomodoro)',
            weight: 0.45
          },
          {
            text: '8 x fresh basil (large leaves), chopped(pizza pomodoro)',
            weight: 0.625
          }
        ],
        calories: 2622.307053843971,
        totalWeight: 1635.303775760991,
        totalTime: 0,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 2622.307053843971,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 70.93890792285919,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 24.16120194761331,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 32.43845301653741,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 8.56056558882679,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 422.24577916706255,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 26.813286575625,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 30.241844877812504,
            unit: 'g'
          },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 6.137700000000001,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 73.11291696214585,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 108.68666666666667,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 3783.2025989959825,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 334.9363702430416,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 209.37505679701155,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 1777.6795129200239,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 26.110840970261393,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 6.310458388534487,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 751.2985991854167,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 415.977832375,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 69.66767939625,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 7.5815516391145845,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 3.406456330697917,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 45.916101732550004,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 1.0980029613479168,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 1796.0180662833336,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 485.9555662833333,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 770.625,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 0.1498,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 21.42,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 9.763706734545137,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 35.63789774218936,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 1052.8903452484649,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 131.11535269219857,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 109.13678141978336,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 120.80600973806656,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 140.74859305568754,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 107.25314630249999,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 146.2258339242917,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 36.22888888888889,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 157.6334416248326,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 33.493637024304164,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 49.851203999288465,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 37.82296836000051,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 145.0602276125633,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 57.367803532131695,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 107.32837131220238,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 46.219759152777776,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 77.4085326625,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 631.7959699262154,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 262.0351023613782,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 286.97563582843753,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 84.46176625753206,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 449.00451657083335,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 6.241666666666666,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 142.8,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 65.0913782303009,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 29.698248118491133,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 70.93890792285919,
            hasRDI: true,
            daily: 109.13678141978336,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 24.16120194761331,
                hasRDI: true,
                daily: 120.80600973806656,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 32.43845301653741,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 8.56056558882679,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 422.24577916706255,
            hasRDI: true,
            daily: 140.74859305568754,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 395.43249259143755,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 26.813286575625,
                hasRDI: true,
                daily: 107.25314630249999,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 30.241844877812504,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 6.137700000000001,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 73.11291696214585,
            hasRDI: true,
            daily: 146.2258339242917,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 108.68666666666667,
            hasRDI: true,
            daily: 36.22888888888889,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 3783.2025989959825,
            hasRDI: true,
            daily: 157.6334416248326,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 334.9363702430416,
            hasRDI: true,
            daily: 33.493637024304164,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 209.37505679701155,
            hasRDI: true,
            daily: 49.851203999288465,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1777.6795129200239,
            hasRDI: true,
            daily: 37.82296836000051,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 26.110840970261393,
            hasRDI: true,
            daily: 145.0602276125633,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 6.310458388534487,
            hasRDI: true,
            daily: 57.367803532131695,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 751.2985991854167,
            hasRDI: true,
            daily: 107.32837131220238,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 415.977832375,
            hasRDI: true,
            daily: 46.219759152777776,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 69.66767939625,
            hasRDI: true,
            daily: 77.4085326625,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 7.5815516391145845,
            hasRDI: true,
            daily: 631.7959699262154,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 3.406456330697917,
            hasRDI: true,
            daily: 262.0351023613782,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 45.916101732550004,
            hasRDI: true,
            daily: 286.97563582843753,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 1.0980029613479168,
            hasRDI: true,
            daily: 84.46176625753206,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 1796.0180662833336,
            hasRDI: true,
            daily: 449.00451657083335,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 485.9555662833333,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 770.625,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.1498,
            hasRDI: true,
            daily: 6.241666666666666,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 21.42,
            hasRDI: true,
            daily: 142.8,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 9.763706734545137,
            hasRDI: true,
            daily: 65.0913782303009,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 35.63789774218936,
            hasRDI: true,
            daily: 29.698248118491133,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 1052.8903452484649,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_c9bf37296a0126d18781c952dc45a230',
        label: 'Pizza Frizza',
        image:
          'https://www.edamam.com/web-img/9a8/9a87dd2cd93448b915b0199a2e2c646e.jpg',
        source: 'Martha Stewart',
        url: 'http://www.marthastewart.com/284463/pizza-frizza',
        shareAs:
          'http://www.edamam.com/recipe/pizza-frizza-c9bf37296a0126d18781c952dc45a230/pizza',
        yield: 4,
        dietLabels: [],
        healthLabels: [
          'Sugar-Conscious',
          'Vegan',
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        cautions: [],
        ingredientLines: ['1 basic pizza dough', 'Sugar', 'Oil'],
        ingredients: [
          {
            text: '1 basic pizza dough',
            weight: 228
          },
          {
            text: 'Sugar',
            weight: 2.736
          },
          {
            text: 'Oil',
            weight: 3.1008
          }
        ],
        calories: 655.879392,
        totalWeight: 233.83679999999998,
        totalTime: 31,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 655.879392,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 11.0808,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 2.1777739200000004,
            unit: 'g'
          },
          FATRN: {
            label: 'Trans',
            quantity: 0.012248160000000001,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 3.8134222080000004,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 4.041827136,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 116.73545280000002,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 6.1560000000000015,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 4.622928,
            unit: 'g'
          },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 2.730528,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 20.064000000000004,
            unit: 'g'
          },
          NA: {
            label: 'Sodium',
            quantity: 1397.6673600000001,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 177.86736000000002,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 61.56000000000001,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 250.85472000000004,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 6.704568000000001,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 1.9610736000000002,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 234.84000000000003,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 1.07844,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.6662798400000001,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 9.988680000000002,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.10944000000000001,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 693.1200000000001,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 68.4,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 367.08000000000004,
            unit: 'µg'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 1.20259968,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 4.9468704,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 81.39654720000001,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 32.793969600000004,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 17.047384615384615,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 10.888869600000003,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 38.911817600000006,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 24.624000000000006,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 40.12800000000001,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 58.23614,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 17.786736,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 14.65714285714286,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 5.337334468085108,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 37.247600000000006,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 17.82794181818182,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 33.548571428571435,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 89.87,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 51.252295384615394,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 62.42925000000001,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 8.418461538461539,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 173.28000000000003,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 8.0173312,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 4.122392,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 11.0808,
            hasRDI: true,
            daily: 17.047384615384615,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 2.1777739200000004,
                hasRDI: true,
                daily: 10.888869600000003,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.012248160000000001,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 3.8134222080000004,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 4.041827136,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 116.73545280000002,
            hasRDI: true,
            daily: 38.911817600000006,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 110.57945280000001,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 6.1560000000000015,
                hasRDI: true,
                daily: 24.624000000000006,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 4.622928,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 2.730528,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 20.064000000000004,
            hasRDI: true,
            daily: 40.12800000000001,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 1397.6673600000001,
            hasRDI: true,
            daily: 58.23614,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 177.86736000000002,
            hasRDI: true,
            daily: 17.786736,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 61.56000000000001,
            hasRDI: true,
            daily: 14.65714285714286,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 250.85472000000004,
            hasRDI: true,
            daily: 5.337334468085108,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 6.704568000000001,
            hasRDI: true,
            daily: 37.247600000000006,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 1.9610736000000002,
            hasRDI: true,
            daily: 17.82794181818182,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 234.84000000000003,
            hasRDI: true,
            daily: 33.548571428571435,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 1.07844,
            hasRDI: true,
            daily: 89.87,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.6662798400000001,
            hasRDI: true,
            daily: 51.252295384615394,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 9.988680000000002,
            hasRDI: true,
            daily: 62.42925000000001,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.10944000000000001,
            hasRDI: true,
            daily: 8.418461538461539,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 693.1200000000001,
            hasRDI: true,
            daily: 173.28000000000003,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 68.4,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 367.08000000000004,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 1.20259968,
            hasRDI: true,
            daily: 8.0173312,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 4.9468704,
            hasRDI: true,
            daily: 4.122392,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 81.39654720000001,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_48ea24d31a85c86430cf586240898fbc',
        label: 'shaved asparagus pizza',
        image:
          'https://www.edamam.com/web-img/3c4/3c4feccfe3839e8bf4168f27b3942775.jpg',
        source: 'Smitten Kitchen',
        url: 'https://smittenkitchen.com/2010/05/shaved-asparagus-pizza/',
        shareAs:
          'http://www.edamam.com/recipe/shaved-asparagus-pizza-48ea24d31a85c86430cf586240898fbc/pizza',
        yield: 8,
        dietLabels: [],
        healthLabels: [
          'Sugar-Conscious',
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 recipe Really Simple Pizza Dough or your favorite pizza dough',
          '1/2 pound asparagus',
          '1/4 cup grated Parmesan',
          '1/2 pound mozzarella, shredded or cut into small cubes',
          '2 teaspoons olive oil',
          '1/2 teaspoon coarse salt',
          'Several grinds black pepper',
          '1 scallion, thinly sliced'
        ],
        ingredients: [
          {
            text:
              '1 recipe Really Simple Pizza Dough or your favorite pizza dough',
            weight: 228
          },
          {
            text: '1/2 pound asparagus',
            weight: 226.796185
          },
          {
            text: '1/4 cup grated Parmesan',
            weight: 28.25
          },
          {
            text: '1/2 pound mozzarella, shredded or cut into small cubes',
            weight: 226.796185
          },
          {
            text: '2 teaspoons olive oil',
            weight: 9
          },
          {
            text: '1/2 teaspoon coarse salt',
            weight: 2.4270833334564377
          },
          {
            text: 'Several grinds black pepper',
            weight: 1.5
          },
          {
            text: '1 scallion, thinly sliced',
            weight: 15
          }
        ],
        calories: 1542.4927920000002,
        totalWeight: 735.3423700000001,
        totalTime: 0,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1542.4927920000002,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 75.3154777695,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 37.7725777252,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 25.463285740050004,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 6.151471407750001,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 130.7364284295,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 11.688219885000002,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 9.077268983500003,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 85.86395528450001,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 198.37898615000003,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 3215.7880036500005,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 1729.6068186500002,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 156.66570290000004,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 968.7083943,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 13.204241573000001,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 10.661173001,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 1359.6075111,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 558.53022145,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 15.520586360000001,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 1.49168490005,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.7358658244,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 12.615067221700002,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.4389616168,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 838.7622491500001,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 214.04224915,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 367.08000000000004,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 5.509953018000001,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 41.654889600000004,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 5.106659641999999,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 141.70327521500002,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 428.1352757755,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 77.12463960000001,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 115.86996579923077,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 188.86288862600003,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 43.5788094765,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 46.75287954000001,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 171.72791056900002,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 66.12632871666668,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 133.99116681875,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 172.96068186500003,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 37.30135783333334,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 20.610816900000003,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 73.35689762777778,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 96.91975455454545,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 194.22964444285716,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 62.05891349444445,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 17.24509595555556,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 124.30707500416669,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 133.52814033846153,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 78.844170135625,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 33.76627821538462,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 209.69056228750003,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 229.58137575000006,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 277.699264,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 34.04439761333333,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 118.08606267916667,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 75.3154777695,
            hasRDI: true,
            daily: 115.86996579923077,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 37.7725777252,
                hasRDI: true,
                daily: 188.86288862600003,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 25.463285740050004,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 6.151471407750001,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 130.7364284295,
            hasRDI: true,
            daily: 43.5788094765,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 119.0482085445,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 11.688219885000002,
                hasRDI: true,
                daily: 46.75287954000001,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 9.077268983500003,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 85.86395528450001,
            hasRDI: true,
            daily: 171.72791056900002,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 198.37898615000003,
            hasRDI: true,
            daily: 66.12632871666668,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 3215.7880036500005,
            hasRDI: true,
            daily: 133.99116681875,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 1729.6068186500002,
            hasRDI: true,
            daily: 172.96068186500003,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 156.66570290000004,
            hasRDI: true,
            daily: 37.30135783333334,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 968.7083943,
            hasRDI: true,
            daily: 20.610816900000003,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 13.204241573000001,
            hasRDI: true,
            daily: 73.35689762777778,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 10.661173001,
            hasRDI: true,
            daily: 96.91975455454545,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 1359.6075111,
            hasRDI: true,
            daily: 194.22964444285716,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 558.53022145,
            hasRDI: true,
            daily: 62.05891349444445,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 15.520586360000001,
            hasRDI: true,
            daily: 17.24509595555556,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 1.49168490005,
            hasRDI: true,
            daily: 124.30707500416669,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.7358658244,
            hasRDI: true,
            daily: 133.52814033846153,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 12.615067221700002,
            hasRDI: true,
            daily: 78.844170135625,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.4389616168,
            hasRDI: true,
            daily: 33.76627821538462,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 838.7622491500001,
            hasRDI: true,
            daily: 209.69056228750003,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 214.04224915,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 367.08000000000004,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 5.509953018000001,
            hasRDI: true,
            daily: 229.58137575000006,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 41.654889600000004,
            hasRDI: true,
            daily: 277.699264,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 5.106659641999999,
            hasRDI: true,
            daily: 34.04439761333333,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 141.70327521500002,
            hasRDI: true,
            daily: 118.08606267916667,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 428.1352757755,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_2104d148cdf2993e7dcfb0edda052762',
        label: 'Chorizo, caper & rocket pizza',
        image:
          'https://www.edamam.com/web-img/7fe/7fee72cbf470edc0089493eb663a7a09.jpg',
        source: 'BBC Good Food',
        url:
          'http://www.bbcgoodfood.com/recipes/1506638/chorizo-caper-and-rocket-pizza',
        shareAs:
          'http://www.edamam.com/recipe/chorizo-caper-rocket-pizza-2104d148cdf2993e7dcfb0edda052762/pizza',
        yield: 2,
        dietLabels: ['Balanced'],
        healthLabels: [
          'Sugar-Conscious',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        cautions: ['Sulfites', 'FODMAP'],
        ingredientLines: [
          '1 pack pizza base mix',
          '3 tbsp tomato pizza sauce',
          '2 small cooking chorizo, diced',
          '1 tbsp capers, drained',
          'handful cherry tomatoes, halved',
          'handful rocket',
          'olive oil, to drizzle'
        ],
        ingredients: [
          {
            text: '1 pack pizza base mix',
            weight: 228
          },
          {
            text: '3 tbsp tomato pizza sauce',
            weight: 47.249999999201144
          },
          {
            text: '2 small cooking chorizo, diced',
            weight: 120
          },
          {
            text: '1 tbsp capers, drained',
            weight: 8.6
          },
          {
            text: 'handful cherry tomatoes, halved',
            weight: 21.874999999999996
          },
          {
            text: 'handful rocket',
            weight: 10
          },
          {
            text: 'olive oil, to drizzle',
            weight: 5.925859999989135
          }
        ],
        calories: 1250.195102399473,
        totalWeight: 441.6508599991903,
        totalTime: 0,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1250.195102399473,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 60.556944999979955,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 20.27575574879483,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 28.489848464588384,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 8.067755997798066,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 121.96032749993083,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 7.7986999999840245,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 4.4940224999698035,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 50.66750999998259,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 105.6,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 3249.9102671972196,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 234.6417585995685,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 103.02674999983223,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 987.908008597172,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 9.418317315992752,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 6.282632499998002,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 449.7749999996006,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 21.6895,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 10.20592499990973,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 1.877304249999513,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.0755127499995767,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 17.03381199998865,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.8364779999989136,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 710.4792500000001,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 90.48424999992012,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 367.08000000000004,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 2.40944999999984,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 73.2,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 2.012365909998441,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 22.92709271999346,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 197.64482499930727,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 62.50975511997365,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 93.16453076919993,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 101.37877874397415,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 40.65344249997694,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 31.194799999936098,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 101.33501999996518,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 35.2,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 135.41292779988416,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 23.46417585995685,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 24.530178571388625,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 21.019319331854724,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 52.323985088848616,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 57.11484090907274,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 64.25357142851438,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 2.4099444444444442,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 11.339916666566367,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 156.44202083329273,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 82.73174999996743,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 106.46132499992906,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 64.34446153837797,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 177.6198125,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 100.39374999999335,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 488,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 13.41577273332294,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 19.10591059999455,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 60.556944999979955,
            hasRDI: true,
            daily: 93.16453076919993,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 20.27575574879483,
                hasRDI: true,
                daily: 101.37877874397415,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 28.489848464588384,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 8.067755997798066,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 121.96032749993083,
            hasRDI: true,
            daily: 40.65344249997694,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 114.1616274999468,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 7.7986999999840245,
                hasRDI: true,
                daily: 31.194799999936098,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 4.4940224999698035,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 50.66750999998259,
            hasRDI: true,
            daily: 101.33501999996518,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 105.6,
            hasRDI: true,
            daily: 35.2,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 3249.9102671972196,
            hasRDI: true,
            daily: 135.41292779988416,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 234.6417585995685,
            hasRDI: true,
            daily: 23.46417585995685,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 103.02674999983223,
            hasRDI: true,
            daily: 24.530178571388625,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 987.908008597172,
            hasRDI: true,
            daily: 21.019319331854724,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 9.418317315992752,
            hasRDI: true,
            daily: 52.323985088848616,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 6.282632499998002,
            hasRDI: true,
            daily: 57.11484090907274,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 449.7749999996006,
            hasRDI: true,
            daily: 64.25357142851438,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 21.6895,
            hasRDI: true,
            daily: 2.4099444444444442,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 10.20592499990973,
            hasRDI: true,
            daily: 11.339916666566367,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 1.877304249999513,
            hasRDI: true,
            daily: 156.44202083329273,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.0755127499995767,
            hasRDI: true,
            daily: 82.73174999996743,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 17.03381199998865,
            hasRDI: true,
            daily: 106.46132499992906,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.8364779999989136,
            hasRDI: true,
            daily: 64.34446153837797,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 710.4792500000001,
            hasRDI: true,
            daily: 177.6198125,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 90.48424999992012,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 367.08000000000004,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 2.40944999999984,
            hasRDI: true,
            daily: 100.39374999999335,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 73.2,
            hasRDI: true,
            daily: 488,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 2.012365909998441,
            hasRDI: true,
            daily: 13.41577273332294,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 22.92709271999346,
            hasRDI: true,
            daily: 19.10591059999455,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 197.64482499930727,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_45d4aa853235b7c40d6c82c03efb4aee',
        label: 'Pizza Margherita (Tomato, Basil, And Mozzarella Pizza)',
        image:
          'https://www.edamam.com/web-img/7cf/7cfc43d9b22c3390f374ce83adb2ea48.jpg',
        source: 'Saveur',
        url:
          'http://www.saveur.com/article/Recipes/Pizza-Margherita-Tomato-Basil-and-Mozzarella-Pizza',
        shareAs:
          'http://www.edamam.com/recipe/pizza-margherita-tomato-basil-and-mozzarella-pizza-45d4aa853235b7c40d6c82c03efb4aee/pizza',
        yield: 12,
        dietLabels: [],
        healthLabels: [
          'Sugar-Conscious',
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 recipe Naples-style pizza dough',
          'Fine semolina, for dusting',
          '1 recipe Naples-style pizza sauce',
          '1 lb. fresh mozzarella, thinly sliced',
          '16 fresh basil leaves',
          'Olive oil, to taste'
        ],
        ingredients: [
          {
            text: '1 recipe Naples-style pizza dough',
            weight: 228
          },
          {
            text: '1 recipe Naples-style pizza sauce',
            weight: 452
          },
          {
            text: '1 lb. fresh mozzarella, thinly sliced',
            weight: 453.59237
          },
          {
            text: '16 fresh basil leaves',
            weight: 8
          },
          {
            text: 'Olive oil, to taste',
            weight: 15.525656232
          }
        ],
        calories: 3329.103911090881,
        totalWeight: 1157.1180262320001,
        totalTime: 0,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 3329.103911090881,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 180.44035092700003,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 83.06237111491457,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 62.192620523529534,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 16.90562643579336,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 255.31607290300002,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 16.228000000000005,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 22.724801411,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 167.70462842900002,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 421.6179723000001,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 6262.734673024641,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 3291.8767250623205,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 261.358474,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 1306.32545776232,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 19.2999501028992,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 21.236897204000005,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 2654.1169898000003,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 1131.3703423000002,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 6.864000000000001,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 2.1709577110000002,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 3.1216664071,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 20.458496064800006,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.6648291769,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 1024.1114659,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 105.5914659,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 538.84,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 13.867506036000002,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 72.57477920000001,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 8.380157172292002,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 85.531069561664,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 524.787944237,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 166.45519555454405,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 277.6005398876924,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 415.31185557457286,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 85.10535763433334,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 64.91200000000002,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 335.4092568580001,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 140.53932410000004,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 260.94727804269337,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 329.18767250623205,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 62.228208095238095,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 27.794158675794044,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 107.22194501610666,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 193.0627018545455,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 379.15956997142865,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 125.70781581111113,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 7.626666666666668,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 180.91314258333338,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 240.12818516153848,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 127.86560040500004,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 51.14070591538461,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 256.027866475,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 577.8127515000001,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 483.8318613333334,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 55.86771448194668,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 71.27589130138666,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 180.44035092700003,
            hasRDI: true,
            daily: 277.6005398876924,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 83.06237111491457,
                hasRDI: true,
                daily: 415.31185557457286,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 62.192620523529534,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 16.90562643579336,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 255.31607290300002,
            hasRDI: true,
            daily: 85.10535763433334,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 239.088072903,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 16.228000000000005,
                hasRDI: true,
                daily: 64.91200000000002,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 22.724801411,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 167.70462842900002,
            hasRDI: true,
            daily: 335.4092568580001,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 421.6179723000001,
            hasRDI: true,
            daily: 140.53932410000004,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 6262.734673024641,
            hasRDI: true,
            daily: 260.94727804269337,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 3291.8767250623205,
            hasRDI: true,
            daily: 329.18767250623205,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 261.358474,
            hasRDI: true,
            daily: 62.228208095238095,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1306.32545776232,
            hasRDI: true,
            daily: 27.794158675794044,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 19.2999501028992,
            hasRDI: true,
            daily: 107.22194501610666,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 21.236897204000005,
            hasRDI: true,
            daily: 193.0627018545455,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 2654.1169898000003,
            hasRDI: true,
            daily: 379.15956997142865,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 1131.3703423000002,
            hasRDI: true,
            daily: 125.70781581111113,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 6.864000000000001,
            hasRDI: true,
            daily: 7.626666666666668,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 2.1709577110000002,
            hasRDI: true,
            daily: 180.91314258333338,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 3.1216664071,
            hasRDI: true,
            daily: 240.12818516153848,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 20.458496064800006,
            hasRDI: true,
            daily: 127.86560040500004,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.6648291769,
            hasRDI: true,
            daily: 51.14070591538461,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 1024.1114659,
            hasRDI: true,
            daily: 256.027866475,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 105.5914659,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 538.84,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 13.867506036000002,
            hasRDI: true,
            daily: 577.8127515000001,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 72.57477920000001,
            hasRDI: true,
            daily: 483.8318613333334,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 8.380157172292002,
            hasRDI: true,
            daily: 55.86771448194668,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 85.531069561664,
            hasRDI: true,
            daily: 71.27589130138666,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 524.787944237,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_d3c3999a8d58563e608c3409911948b0',
        label: 'Pizza Arizona',
        image:
          'https://www.edamam.com/web-img/937/93708d04e2bedb4b41f5661bf99ed6c8.jpg',
        source: 'Epicurious',
        url:
          'https://www.epicurious.com/recipes/food/views/pizza-arizona-106634',
        shareAs:
          'http://www.edamam.com/recipe/pizza-arizona-d3c3999a8d58563e608c3409911948b0/pizza',
        yield: 2,
        dietLabels: [],
        healthLabels: [
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '2 teaspoons yellow cornmeal',
          '1 10-ounce tube refrigerated pizza dough',
          '1 1/2 cups purchased chipotle salsa',
          '2 tablespoons olive oil',
          '1 1/2 teaspoons chili powder',
          '1 1/2 cups shredded Mexican-style four-cheese mix or pizza cheese',
          '1/4 cup chopped fresh cilantro'
        ],
        ingredients: [
          {
            text: '2 teaspoons yellow cornmeal',
            weight: 6.6
          },
          {
            text: '1 10-ounce tube refrigerated pizza dough',
            weight: 283.49523125
          },
          {
            text: '1 1/2 cups purchased chipotle salsa',
            weight: 390
          },
          {
            text: '2 tablespoons olive oil',
            weight: 27
          },
          {
            text: '1 1/2 teaspoons chili powder',
            weight: 4.050000000000001
          },
          {
            text:
              '1 1/2 cups shredded Mexican-style four-cheese mix or pizza cheese',
            weight: 169.5
          },
          {
            text: '1/4 cup chopped fresh cilantro',
            weight: 4
          }
        ],
        calories: 1844.9830766875002,
        totalWeight: 884.64523125,
        totalTime: 0,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1844.9830766875002,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 95.62487309375,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 39.2125952271875,
            unit: 'g'
          },
          FATRN: {
            label: 'Trans',
            quantity: 1.9984050000000002,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 36.55119677775001,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 10.039719714375,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 177.613315625,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 16.45317124375,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 18.625865419374996,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 72.80097035,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 172.89000000000001,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 5697.861267562501,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 1498.764280375,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 189.9952124375,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 1661.621754375,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 11.37636979875,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 9.230618988749999,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 1246.9390881875001,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 613.6525,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 8.518349999999998,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 1.5723684438124998,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.75799807525,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 17.696279081062503,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 1.008311711,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 947.2195030000001,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 150.31256937499998,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 468.3073223125,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 1.4916,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 40.68,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 12.429326170625,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 57.632292774999996,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 516.7559525562501,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 92.24915383437501,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 147.115189375,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 196.0629761359375,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 59.20443854166667,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 65.812684975,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 145.6019407,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 57.63,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 237.41088614843753,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 149.8764280375,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 45.2369553422619,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 35.353654348404255,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 63.202054437499996,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 83.91471807954544,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 178.13415545535716,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 68.1836111111111,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 9.464833333333331,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 131.03070365104168,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 135.2306211730769,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 110.60174425664064,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 77.5624393076923,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 236.80487575000004,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 62.15,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 271.2,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 82.86217447083332,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 48.02691064583333,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 95.62487309375,
            hasRDI: true,
            daily: 147.115189375,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 39.2125952271875,
                hasRDI: true,
                daily: 196.0629761359375,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 1.9984050000000002,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 36.55119677775001,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 10.039719714375,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 177.613315625,
            hasRDI: true,
            daily: 59.20443854166667,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 161.16014438125,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 16.45317124375,
                hasRDI: true,
                daily: 65.812684975,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 18.625865419374996,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 72.80097035,
            hasRDI: true,
            daily: 145.6019407,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 172.89000000000001,
            hasRDI: true,
            daily: 57.63,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 5697.861267562501,
            hasRDI: true,
            daily: 237.41088614843753,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 1498.764280375,
            hasRDI: true,
            daily: 149.8764280375,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 189.9952124375,
            hasRDI: true,
            daily: 45.2369553422619,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1661.621754375,
            hasRDI: true,
            daily: 35.353654348404255,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 11.37636979875,
            hasRDI: true,
            daily: 63.202054437499996,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 9.230618988749999,
            hasRDI: true,
            daily: 83.91471807954544,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 1246.9390881875001,
            hasRDI: true,
            daily: 178.13415545535716,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 613.6525,
            hasRDI: true,
            daily: 68.1836111111111,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 8.518349999999998,
            hasRDI: true,
            daily: 9.464833333333331,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 1.5723684438124998,
            hasRDI: true,
            daily: 131.03070365104168,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.75799807525,
            hasRDI: true,
            daily: 135.2306211730769,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 17.696279081062503,
            hasRDI: true,
            daily: 110.60174425664064,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 1.008311711,
            hasRDI: true,
            daily: 77.5624393076923,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 947.2195030000001,
            hasRDI: true,
            daily: 236.80487575000004,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 150.31256937499998,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 468.3073223125,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 1.4916,
            hasRDI: true,
            daily: 62.15,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 40.68,
            hasRDI: true,
            daily: 271.2,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 12.429326170625,
            hasRDI: true,
            daily: 82.86217447083332,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 57.632292774999996,
            hasRDI: true,
            daily: 48.02691064583333,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 516.7559525562501,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_1b25671a32284038b57ad8b49c44af68',
        label: 'Grilled BLT Pizza recipes',
        image:
          'https://www.edamam.com/web-img/2ac/2ac98d88117ff8f2327d302ab290b164',
        source: 'Food Republic',
        url: 'http://www.foodrepublic.com/recipes/grilled-blt-pizza-recipe/',
        shareAs:
          'http://www.edamam.com/recipe/grilled-blt-pizza-recipes-1b25671a32284038b57ad8b49c44af68/pizza',
        yield: 4,
        dietLabels: [],
        healthLabels: ['Peanut-Free', 'Tree-Nut-Free', 'Alcohol-Free'],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 batch pizza dough',
          '1 batch pizza sauce',
          '4 ounces mozzarella, grated',
          '4 slices applewood bacon, cooked',
          '1 ripe heirloom tomato, chopped',
          '2 leaves red leaf lettuce, cut into strips'
        ],
        ingredients: [
          {
            text: '1 batch pizza dough',
            weight: 228
          },
          {
            text: '1 batch pizza sauce',
            weight: 452
          },
          {
            text: '4 ounces mozzarella, grated',
            weight: 113.3980925
          },
          {
            text: '4 slices applewood bacon, cooked',
            weight: 116
          },
          {
            text: '1 ripe heirloom tomato, chopped',
            weight: 123
          },
          {
            text: '2 leaves red leaf lettuce, cut into strips',
            weight: 5.2
          }
        ],
        calories: 2676.1262775,
        totalWeight: 1037.5980925000001,
        totalTime: 25,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 2676.1262775,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 135.12791367375,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 51.631641125600005,
            unit: 'g'
          },
          FATRN: {
            label: 'Trans',
            quantity: 0.15428,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 48.764566620025,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 20.230729407625002,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 254.04083822575004,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 17.622800000000005,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 23.61666035275,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 107.82231710725003,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 229.424493075,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 4904.456039975001,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 1579.3963671249999,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 216.2736185,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 1554.9365503000001,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 18.332651607,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 12.826724301000002,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 1643.36524745,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 585.222585575,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 22.467399999999998,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 2.4351774277500007,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 2.2741706017750003,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 25.4453660162,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.938717294225,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 1015.179866475,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 96.65986647500002,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 538.84,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 6.691076509,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 36.7036948,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 6.61265637575,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 52.1887561275,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 519.8432660592501,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 133.806313875,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 207.88909795961536,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 258.158205628,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 84.68027940858335,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 70.49120000000002,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 215.6446342145001,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 76.474831025,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 204.35233499895838,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 157.93963671249998,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 51.49371869047619,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 33.08375638936171,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 101.84806448333332,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 116.60658455454546,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 234.76646392142857,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 65.02473173055556,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 24.963777777777775,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 202.93145231250006,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 174.93620013653847,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 159.03353760125,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 72.20902263269231,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 253.79496661875,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 278.7948545416667,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 244.69129866666668,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 44.08437583833334,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 43.49063010625,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 135.12791367375,
            hasRDI: true,
            daily: 207.88909795961536,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 51.631641125600005,
                hasRDI: true,
                daily: 258.158205628,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.15428,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 48.764566620025,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 20.230729407625002,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 254.04083822575004,
            hasRDI: true,
            daily: 84.68027940858335,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 236.41803822575002,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 17.622800000000005,
                hasRDI: true,
                daily: 70.49120000000002,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 23.61666035275,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 107.82231710725003,
            hasRDI: true,
            daily: 215.6446342145001,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 229.424493075,
            hasRDI: true,
            daily: 76.474831025,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 4904.456039975001,
            hasRDI: true,
            daily: 204.35233499895838,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 1579.3963671249999,
            hasRDI: true,
            daily: 157.93963671249998,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 216.2736185,
            hasRDI: true,
            daily: 51.49371869047619,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1554.9365503000001,
            hasRDI: true,
            daily: 33.08375638936171,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 18.332651607,
            hasRDI: true,
            daily: 101.84806448333332,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 12.826724301000002,
            hasRDI: true,
            daily: 116.60658455454546,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 1643.36524745,
            hasRDI: true,
            daily: 234.76646392142857,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 585.222585575,
            hasRDI: true,
            daily: 65.02473173055556,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 22.467399999999998,
            hasRDI: true,
            daily: 24.963777777777775,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 2.4351774277500007,
            hasRDI: true,
            daily: 202.93145231250006,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 2.2741706017750003,
            hasRDI: true,
            daily: 174.93620013653847,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 25.4453660162,
            hasRDI: true,
            daily: 159.03353760125,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.938717294225,
            hasRDI: true,
            daily: 72.20902263269231,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 1015.179866475,
            hasRDI: true,
            daily: 253.79496661875,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 96.65986647500002,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 538.84,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 6.691076509,
            hasRDI: true,
            daily: 278.7948545416667,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 36.7036948,
            hasRDI: true,
            daily: 244.69129866666668,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 6.61265637575,
            hasRDI: true,
            daily: 44.08437583833334,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 52.1887561275,
            hasRDI: true,
            daily: 43.49063010625,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 519.8432660592501,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_f120986ea8ca0b283984f7d7586028c6',
        label: 'Bbq Chicken Pizza With Caramelized Onions',
        image:
          'https://www.edamam.com/web-img/5ed/5ed014fabb67d528958ce9592945d062.jpg',
        source: 'The Kitchn',
        url: 'http://www.thekitchn.com/recipe-bbq-chicken-pizza-with-149070',
        shareAs:
          'http://www.edamam.com/recipe/bbq-chicken-pizza-with-caramelized-onions-f120986ea8ca0b283984f7d7586028c6/pizza',
        yield: 14,
        dietLabels: ['Balanced'],
        healthLabels: ['Peanut-Free', 'Tree-Nut-Free', 'Alcohol-Free'],
        cautions: ['Gluten', 'Wheat', 'Sulfites', 'FODMAP'],
        ingredientLines: [
          '1 medium yellow onion, sliced',
          'Olive oil',
          '1 grilled chicken breast, chopped into bite-size pieces',
          '1 lb ball fresh mozzarella, sliced',
          '1 cup BBQ sauce',
          '1 cup tomato sauce',
          '1 ball pizza dough (approximately 22 oz or enough for a large pizza)',
          'Flour for rolling out dough',
          'Tomatoes, to garnish',
          '1 ball pizza dough'
        ],
        ingredients: [
          {
            text: '1 medium yellow onion, sliced',
            weight: 110
          },
          {
            text: 'Olive oil',
            weight: 21.795256232
          },
          {
            text: '1 grilled chicken breast, chopped into bite-size pieces',
            weight: 52
          },
          {
            text: '1 lb ball fresh mozzarella, sliced',
            weight: 453.59237
          },
          {
            text: '1 cup BBQ sauce',
            weight: 286
          },
          {
            text: '1 cup tomato sauce',
            weight: 245
          },
          {
            text:
              '1 ball pizza dough (approximately 22 oz or enough for a large pizza)',
            weight: 228
          },
          {
            text: 'Flour for rolling out dough',
            weight: 14.42333133
          },
          {
            text: '1 ball pizza dough',
            weight: 228
          }
        ],
        calories: 3522.2281011320806,
        totalWeight: 1638.810957562,
        totalTime: 0,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 3522.2281011320806,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 143.777699574034,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 67.38766364647606,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 50.435801677786635,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 13.165874802186261,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 388.825817040923,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 20.820429945910004,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 116.948144405591,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 164.80495855538902,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 402.53797230000004,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 9781.42853165124,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 2810.482920761821,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 317.0216068926,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 2546.8711182854204,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 20.647212839460202,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 18.999660523310002,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 2364.7841876364005,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 900.4103423000001,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 27.006,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 2.5189857085960004,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 3.0236257396320005,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 32.022597706425,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 1.2916554426852,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 1472.4915320458003,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 223.0515320458,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 734.1600000000001,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 10.518706036000001,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 75.1747792,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 11.298898771090002,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 41.672638755654,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 903.415605331536,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 176.11140505660404,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 221.19646088312922,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 336.9383182323803,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 129.60860568030768,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 83.28171978364001,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 329.60991711077804,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 134.1793241,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 407.559522152135,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 281.04829207618207,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 75.48133497442856,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 54.18874719756213,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 114.70673799700113,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 172.72418657554547,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 337.8263125194858,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 100.0455935888889,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 30.006666666666664,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 209.91547571633336,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 232.58659535630775,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 200.14123566515627,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 99.35811097578461,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 368.1228830114501,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 438.27941816666674,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 501.1651946666667,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 75.32599180726669,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 34.727198963045,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 143.777699574034,
            hasRDI: true,
            daily: 221.19646088312922,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 67.38766364647606,
                hasRDI: true,
                daily: 336.9383182323803,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 50.435801677786635,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 13.165874802186261,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 388.825817040923,
            hasRDI: true,
            daily: 129.60860568030768,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 368.005387095013,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 20.820429945910004,
                hasRDI: true,
                daily: 83.28171978364001,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 116.948144405591,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 164.80495855538902,
            hasRDI: true,
            daily: 329.60991711077804,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 402.53797230000004,
            hasRDI: true,
            daily: 134.1793241,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 9781.42853165124,
            hasRDI: true,
            daily: 407.559522152135,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 2810.482920761821,
            hasRDI: true,
            daily: 281.04829207618207,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 317.0216068926,
            hasRDI: true,
            daily: 75.48133497442856,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 2546.8711182854204,
            hasRDI: true,
            daily: 54.18874719756213,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 20.647212839460202,
            hasRDI: true,
            daily: 114.70673799700113,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 18.999660523310002,
            hasRDI: true,
            daily: 172.72418657554547,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 2364.7841876364005,
            hasRDI: true,
            daily: 337.8263125194858,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 900.4103423000001,
            hasRDI: true,
            daily: 100.0455935888889,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 27.006,
            hasRDI: true,
            daily: 30.006666666666664,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 2.5189857085960004,
            hasRDI: true,
            daily: 209.91547571633336,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 3.0236257396320005,
            hasRDI: true,
            daily: 232.58659535630775,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 32.022597706425,
            hasRDI: true,
            daily: 200.14123566515627,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 1.2916554426852,
            hasRDI: true,
            daily: 99.35811097578461,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 1472.4915320458003,
            hasRDI: true,
            daily: 368.1228830114501,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 223.0515320458,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 734.1600000000001,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 10.518706036000001,
            hasRDI: true,
            daily: 438.27941816666674,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 75.1747792,
            hasRDI: true,
            daily: 501.1651946666667,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 11.298898771090002,
            hasRDI: true,
            daily: 75.32599180726669,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 41.672638755654,
            hasRDI: true,
            daily: 34.727198963045,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 903.415605331536,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_a7d58871fda455844753aace394440ae',
        label: 'Classic Margherita Pizza',
        image:
          'https://www.edamam.com/web-img/796/796283c49b66ec1c049f26322a8619e4.jpg',
        source: 'Fine Cooking',
        url: 'http://www.finecooking.com/recipes/classic-margherita-pizza.aspx',
        shareAs:
          'http://www.edamam.com/recipe/classic-margherita-pizza-a7d58871fda455844753aace394440ae/pizza',
        yield: 8,
        dietLabels: [],
        healthLabels: [
          'Sugar-Conscious',
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        cautions: ['Sulfites', 'FODMAP'],
        ingredientLines: [
          '1 recipe Pizza Dough , refrigerated for at least 8 hours',
          '12 oz. sliced fresh mozzarella or 1 cup grated low-moisture mozzarella (or a combination)',
          'Unbleached bread flour or semolina, for dusting',
          '16-24 large basil leaves, thinly sliced (a chiffonade)',
          '1 cup No-Cook Pizza Sauce'
        ],
        ingredients: [
          {
            text: '1 recipe Pizza Dough , refrigerated for at least 8 hours',
            weight: 228
          },
          {
            text:
              '12 oz. sliced fresh mozzarella or 1 cup grated low-moisture mozzarella (or a combination)',
            weight: 340.1942775
          },
          {
            text: '16-24 large basil leaves, thinly sliced (a chiffonade)',
            weight: 12.5
          },
          {
            text: '1 cup No-Cook Pizza Sauce',
            weight: 252
          }
        ],
        calories: 1777.4178325000003,
        totalWeight: 832.6942775,
        totalTime: 0,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1777.4178325000003,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 86.99142102125,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 47.8560763768,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 25.385049860075,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 6.069791222875001,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 143.60470467725003,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 11.396,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 14.959501058249998,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 101.37242132175001,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 268.75347922500004,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 4408.118119925,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 2054.026101375,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 190.51885550000003,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 1438.3026509000001,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 10.864304821000001,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 12.625722903000002,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 1572.12774235,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 641.9477567250001,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 30.726000000000003,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 1.3384682832500003,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.771569805325,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 14.036152048600004,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.5974068826750001,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 725.4335994250001,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 125.91359942500002,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 367.08000000000004,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 7.806829527,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 54.4310844,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 1.4075691272500002,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 62.4104683825,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 481.54385817775005,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 88.87089162500001,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 133.83295541730772,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 239.280381884,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 47.86823489241667,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 45.584,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 202.74484264350002,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 89.58449307500001,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 183.67158833020835,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 205.4026101375,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 45.36163226190477,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 30.60218406170213,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 60.35724900555556,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 114.77929911818183,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 224.58967747857145,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 71.327528525,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 34.14,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 111.53902360416672,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 136.27460040961537,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 87.72595030375003,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 45.954375590384615,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 181.35839985625003,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 325.28456362500003,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 362.873896,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 9.383794181666667,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 52.00872365208333,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 86.99142102125,
            hasRDI: true,
            daily: 133.83295541730772,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 47.8560763768,
                hasRDI: true,
                daily: 239.280381884,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 25.385049860075,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 6.069791222875001,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 143.60470467725003,
            hasRDI: true,
            daily: 47.86823489241667,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 132.20870467725,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 11.396,
                hasRDI: true,
                daily: 45.584,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 14.959501058249998,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 101.37242132175001,
            hasRDI: true,
            daily: 202.74484264350002,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 268.75347922500004,
            hasRDI: true,
            daily: 89.58449307500001,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 4408.118119925,
            hasRDI: true,
            daily: 183.67158833020835,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 2054.026101375,
            hasRDI: true,
            daily: 205.4026101375,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 190.51885550000003,
            hasRDI: true,
            daily: 45.36163226190477,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1438.3026509000001,
            hasRDI: true,
            daily: 30.60218406170213,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 10.864304821000001,
            hasRDI: true,
            daily: 60.35724900555556,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 12.625722903000002,
            hasRDI: true,
            daily: 114.77929911818183,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 1572.12774235,
            hasRDI: true,
            daily: 224.58967747857145,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 641.9477567250001,
            hasRDI: true,
            daily: 71.327528525,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 30.726000000000003,
            hasRDI: true,
            daily: 34.14,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 1.3384682832500003,
            hasRDI: true,
            daily: 111.53902360416672,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.771569805325,
            hasRDI: true,
            daily: 136.27460040961537,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 14.036152048600004,
            hasRDI: true,
            daily: 87.72595030375003,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.5974068826750001,
            hasRDI: true,
            daily: 45.954375590384615,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 725.4335994250001,
            hasRDI: true,
            daily: 181.35839985625003,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 125.91359942500002,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 367.08000000000004,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 7.806829527,
            hasRDI: true,
            daily: 325.28456362500003,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 54.4310844,
            hasRDI: true,
            daily: 362.873896,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 1.4075691272500002,
            hasRDI: true,
            daily: 9.383794181666667,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 62.4104683825,
            hasRDI: true,
            daily: 52.00872365208333,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 481.54385817775005,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    },
    {
      recipe: {
        uri:
          'http://www.edamam.com/ontologies/edamam.owl#recipe_21e71168dd4f1048624cba73ba7ed593',
        label: 'Potato Latke Pizza',
        image:
          'https://www.edamam.com/web-img/5c3/5c3f98ea62776dfb5ebbb7a80ae83209.jpg',
        source: 'Food52',
        url: 'https://food52.com/recipes/15442-potato-latke-pizza',
        shareAs:
          'http://www.edamam.com/recipe/potato-latke-pizza-21e71168dd4f1048624cba73ba7ed593/pizza',
        yield: 4,
        dietLabels: ['Balanced'],
        healthLabels: [
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '2 cups bread flour',
          '1 envelope pizza yeast',
          '1.5 teaspoons sugar',
          '3/4 teaspoons salt',
          '2/3 cups very warm water',
          '3 tablespoons olive oil',
          '3-4 waxy potatoes',
          '2 golden delicious apples',
          '2 teaspoons salt (1/2 teaspoon for apples, 1 1/2 for pizza)',
          '1 tablespoon sugar',
          '3 tablespoons olive oil (one for apples, two for pizza)',
          '1 garlic clove, minced',
          '8 ounces sour cream',
          '6 ounces goat cheese',
          '2 tablespoons fresh rosemary, chopped'
        ],
        ingredients: [
          {
            text: '2 cups bread flour',
            weight: 274
          },
          {
            text: '1 envelope pizza yeast',
            weight: 7.2
          },
          {
            text: '1.5 teaspoons sugar',
            weight: 6.300000000000001
          },
          {
            text: '3/4 teaspoons salt',
            weight: 4.5
          },
          {
            text: '2/3 cups very warm water',
            weight: 158
          },
          {
            text: '3 tablespoons olive oil',
            weight: 40.5
          },
          {
            text: '3-4 waxy potatoes',
            weight: 745.5
          },
          {
            text: '2 golden delicious apples',
            weight: 342
          },
          {
            text: '2 teaspoons salt (1/2 teaspoon for apples, 1 1/2 for pizza)',
            weight: 12
          },
          {
            text: '1 tablespoon sugar',
            weight: 12.6
          },
          {
            text: '3 tablespoons olive oil (one for apples, two for pizza)',
            weight: 40.5
          },
          {
            text: '1 garlic clove, minced',
            weight: 3
          },
          {
            text: '8 ounces sour cream',
            weight: 226.796185
          },
          {
            text: '6 ounces goat cheese',
            weight: 170.09713875
          },
          {
            text: '2 tablespoons fresh rosemary, chopped',
            weight: 3.4
          }
        ],
        calories: 3466.3950833500003,
        totalWeight: 2039.602006480537,
        totalTime: 159,
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 3466.3950833500003,
            unit: 'kcal'
          },
          FAT: {
            label: 'Fat',
            quantity: 168.097874149,
            unit: 'g'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 63.107198980762504,
            unit: 'g'
          },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 79.5175381155125,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 13.632777619137501,
            unit: 'g'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 405.574440128,
            unit: 'g'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 33.6642,
            unit: 'g'
          },
          SUGAR: {
            label: 'Sugars',
            quantity: 66.425030128,
            unit: 'g'
          },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 18.8622,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 88.253591126,
            unit: 'g'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 196.178700025,
            unit: 'mg'
          },
          NA: {
            label: 'Sodium',
            quantity: 4720.47632651415,
            unit: 'mg'
          },
          CA: {
            label: 'Calcium',
            quantity: 665.1288816053291,
            unit: 'mg'
          },
          MG: {
            label: 'Magnesium',
            quantity: 316.3692475273054,
            unit: 'mg'
          },
          K: {
            label: 'Potassium',
            quantity: 4224.029571543443,
            unit: 'mg'
          },
          FE: {
            label: 'Iron',
            quantity: 22.888727803760773,
            unit: 'mg'
          },
          ZN: {
            label: 'Zinc',
            quantity: 7.719967862230538,
            unit: 'mg'
          },
          P: {
            label: 'Phosphorus',
            quantity: 1473.87728795,
            unit: 'mg'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 904.2650452000001,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 150.603465665,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 3.8820586237250003,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 3.066877565449999,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 32.80204353827501,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 3.1860156723249995,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 1116.9633895999998,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 428.52338960000003,
            unit: 'µg'
          },
          FOLAC: {
            label: 'Folic acid',
            quantity: 411.00000000000006,
            unit: 'µg'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 0.9632538816250003,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 57.266036712500004,
            unit: 'IU'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 14.71612806375,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 77.12837982750001,
            unit: 'µg'
          },
          WATER: {
            label: 'Water',
            quantity: 1356.055288507086,
            unit: 'g'
          }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 173.3197541675,
            unit: '%'
          },
          FAT: {
            label: 'Fat',
            quantity: 258.6121140753846,
            unit: '%'
          },
          FASAT: {
            label: 'Saturated',
            quantity: 315.53599490381254,
            unit: '%'
          },
          CHOCDF: {
            label: 'Carbs',
            quantity: 135.19148004266665,
            unit: '%'
          },
          FIBTG: {
            label: 'Fiber',
            quantity: 134.6568,
            unit: '%'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 176.507182252,
            unit: '%'
          },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 65.39290000833333,
            unit: '%'
          },
          NA: {
            label: 'Sodium',
            quantity: 196.68651360475624,
            unit: '%'
          },
          CA: {
            label: 'Calcium',
            quantity: 66.51288816053291,
            unit: '%'
          },
          MG: {
            label: 'Magnesium',
            quantity: 75.32601131602509,
            unit: '%'
          },
          K: {
            label: 'Potassium',
            quantity: 89.8729696073073,
            unit: '%'
          },
          FE: {
            label: 'Iron',
            quantity: 127.15959890978206,
            unit: '%'
          },
          ZN: {
            label: 'Zinc',
            quantity: 70.18152602027762,
            unit: '%'
          },
          P: {
            label: 'Phosphorus',
            quantity: 210.55389827857144,
            unit: '%'
          },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 100.47389391111113,
            unit: '%'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 167.33718407222221,
            unit: '%'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 323.5048853104167,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 235.91365888076913,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 205.0127721142188,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 245.0781286403846,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 279.24084739999995,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 40.13557840104168,
            unit: '%'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 381.77357808333335,
            unit: '%'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 98.107520425,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 64.27364985625,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 168.097874149,
            hasRDI: true,
            daily: 258.6121140753846,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 63.107198980762504,
                hasRDI: true,
                daily: 315.53599490381254,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 79.5175381155125,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 13.632777619137501,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 405.574440128,
            hasRDI: true,
            daily: 135.19148004266665,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 371.910240128,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 33.6642,
                hasRDI: true,
                daily: 134.6568,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 66.425030128,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 18.8622,
                hasRDI: false,
                daily: 0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 88.253591126,
            hasRDI: true,
            daily: 176.507182252,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 196.178700025,
            hasRDI: true,
            daily: 65.39290000833333,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 4720.47632651415,
            hasRDI: true,
            daily: 196.68651360475624,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 665.1288816053291,
            hasRDI: true,
            daily: 66.51288816053291,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 316.3692475273054,
            hasRDI: true,
            daily: 75.32601131602509,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 4224.029571543443,
            hasRDI: true,
            daily: 89.8729696073073,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 22.888727803760773,
            hasRDI: true,
            daily: 127.15959890978206,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 7.719967862230538,
            hasRDI: true,
            daily: 70.18152602027762,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 1473.87728795,
            hasRDI: true,
            daily: 210.55389827857144,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 904.2650452000001,
            hasRDI: true,
            daily: 100.47389391111113,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 150.603465665,
            hasRDI: true,
            daily: 167.33718407222221,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 3.8820586237250003,
            hasRDI: true,
            daily: 323.5048853104167,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 3.066877565449999,
            hasRDI: true,
            daily: 235.91365888076913,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 32.80204353827501,
            hasRDI: true,
            daily: 205.0127721142188,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 3.1860156723249995,
            hasRDI: true,
            daily: 245.0781286403846,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 1116.9633895999998,
            hasRDI: true,
            daily: 279.24084739999995,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 428.52338960000003,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 411.00000000000006,
            hasRDI: false,
            daily: 0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.9632538816250003,
            hasRDI: true,
            daily: 40.13557840104168,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 57.266036712500004,
            hasRDI: true,
            daily: 381.77357808333335,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 14.71612806375,
            hasRDI: true,
            daily: 98.107520425,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 77.12837982750001,
            hasRDI: true,
            daily: 64.27364985625,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 1356.055288507086,
            hasRDI: false,
            daily: 0,
            unit: 'g'
          }
        ]
      },
      bookmarked: false,
      bought: false
    }
  ]);
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

// @route Delete api/recipes
// @desc delete a recipe
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
