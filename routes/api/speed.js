const express = require('express');
const router = express.Router();

// Load Article model
const Speed = require('../../models/Speed');

// @route GET api/speed/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/speed
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Speed.find()
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

// @route GET api/speed/:id
// @description Get article by id
// @access Public
router.get('/:id', (req, res) => {
  Speed.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ nobookfound: 'No Article found' }));
});

// @route POST api/speed
// @description add/save article
// @access Public
router.post('/', (req, res) => {
  Speed.create(req.body)
    .then(article => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route POST api/speed/:id
// @description Update article
// @access Public
router.put('/:id', (req, res) => {
  Speed.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/speed/:id
// @description Delete article by id
// @access Public
router.delete('/:id', (req, res) => {
  Speed.findByIdAndRemove(req.params.id, req.body)
    .then(article => res.json({ mgs: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a article' }));
});

module.exports = router;