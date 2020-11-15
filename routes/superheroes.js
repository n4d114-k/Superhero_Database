const router = require('express').Router()
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")

let Superhero = require('../models/superhero.model')


router.route('/').get((req, res) => {
  Superhero.find()
    .then(superheroes => res.json(superheroes))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add', upload.single("image")).post(async (req, res) => {

  const result = await cloudinary.uploader.upload(req.file.path);

  const nickname = req.body.nickname
  const real_name = req.body.real_name
  const origin_description = req.body.origin_description
  const superpowers = req.body.superpowers
  const catch_phrase = req.body.catch_phrase
  const images = images.push(result.secure_url)
  const cloudinary_id = result.public_id

  const newSuperhero = new Superhero({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
    cloudinary_id
  })

  await newSuperhero.save()
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

router.route('/update/:id', upload.single("image")).post(async (req, res) => {

  await Superhero.findById(req.params.id)
    .then(superhero => {
      superhero.nickname = req.body.nickname
      superhero.real_name = req.body.real_name
      superhero.origin_description = req.body.origin_description
      superhero.superpowers = req.body.superpowers
      superhero.catch_phrase = req.body.catch_phrase
      superhero.images = superhero.images.push(result.secure_url)
      superhero.cloudinary_id = result.public_id

      superhero.save()
        .then(() => res.json('Superhero updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router
