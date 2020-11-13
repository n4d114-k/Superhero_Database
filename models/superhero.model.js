const { Schema, model, Types } = require('mongoose')


const superheroSchema = new Schema({
  nickname: { type: String, required: true, trim: true, minlength: 3},
  real_name: { type: String, required: true, trim: true, minlength: 3},
  origin_description: { type: String, required: true, trim: true },
  superpowers: { type: Array, required: true },
  catch_phrase: { type: String, required: true, trim: true }
  }, {
  timestamps: true
})


module.exports = model('Superhero', superheroSchema)
