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

router.route('/:id').get((req, res) => {
  Superhero.findById(req.params.id)
    .then(superhero => res.json(superhero))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
  Superhero.findByIdAndDelete(req.params.id)
    .then(() => res.json('Superhero deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Superhero.findById(req.params.id)
    .then(superhero => {
      superhero.nickname = req.body.nickname
      superhero.real_name = req.body.real_name
      superhero.origin_description = req.body.origin_description
      superhero.superpowers = req.body.superpowers
      superhero.catch_phrase = req.body.catch_phrase

      superhero.save()
        .then(() => res.json('Superhero updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router
