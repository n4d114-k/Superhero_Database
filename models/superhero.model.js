const mongoose = require('mongoose')

const Schema = mongoose.Schema

const superheroSchema = new Schema({
  nickname​: { type: String, required: true },
  real_name​: { type: String, required: true },
  origin_description​: { type: String, required: true },
  superpowers: { type: String, required: true },
  catch_phrase: { type: String, required: true },
  }, {
  timestamps: true
})

const Superhero = mongoose.model('Superhero', superheroSchema)

module.exports = Superhero
