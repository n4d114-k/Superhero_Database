const router = require('express').Router()
let Superhero = require('../models/superhero.model')

router.route('/').get((req, res) => {
  Superhero.find()
    .then(superheroes => res.json(superheroes))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {

  const nickname = req.body.nickname
  const real_name = req.body.real_name
  const origin_description = req.body.origin_description
  const superpowers = req.body.superpowers
  const catch_phrase = req.body.catch_phrase

  const newSuperhero = new Superhero({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase
  })

  newSuperhero.save()
    .then(() => res.json('Superhero added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
