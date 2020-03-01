const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const RecipeSchema = new Schema({
  label: { type: String, required: true },
  image: String,
  calories: Number,
  url: String,
  source: String,
  totalTime: Number,
  ingredients: [],
  dietLabels: [],
  healthLabels: [],
  cautions: [],
  nutrients: []
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  recipes: [RecipeSchema]
});

module.exports = User = mongoose.model('user', UserSchema);
