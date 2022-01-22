const mongoose = require("mongoose");

const { Schema } = mongoose;

const animalSchema = new Schema({
  species: {
    type: String,
    required: true,
  }, 
  breed: {
    type: String,
  }, 
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  sex: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;