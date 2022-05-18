const express = require('express');
const router = express.Router();

// Load Article model
const Article= require('../../models/Articles');

// @route GET api/submitted/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/submitted
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Article.find()
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

// @route GET api/submitted/:id
// @description Get article by id
// @access Public
router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ nobookfound: 'No Article found' }));
});

// @route POST api/submitted
// @description add/save article
// @access Public
router.post('/', (req, res) => {
    Article.create(req.body)
    .then(article => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route POST api/submitted/:id
// @description Update article
// @access Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/submitted/:id
// @description Delete article by id
// @access Public
router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, req.body)
    .then(article => res.json({ mgs: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a article' }));
});

module.exports = router;