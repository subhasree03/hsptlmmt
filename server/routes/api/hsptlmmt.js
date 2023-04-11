const express = require('express');
const router = express.Router();

// Load Book model
const Hsptl = require('../../models/Hsptl');

// @route GET api/hsptlmmt/test
// @access Public
router.get('/test', (req, res) => res.send(''));

// @route GET api/hstlmmt
// @access Public
router.get('/', (req, res) => {
  Hsptl.find()
    .then((hsptlmmt) => res.json(hsptlmmt))
    .catch((err) => res.status(404).json({ nodatafound: 'No Data found' }));
});

// @route GET api/hsptlmmt/:id
// @access Public
router.get('/:id', (req, res) => {
  Hsptl.findById(req.params.id)
    .then((hsptlmmt) => res.json(hsptlmmt))
    .catch((err) => res.status(404).json({ nodatafound: 'No Data found' }));
});

// @route GET api/hsptlmmt
// @access Public
router.post('/', (req, res) => {
  Hsptl.create(req.body)
    .then((hsptlmmt) => res.json({ msg: 'User added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add the user' }));
});

// @route GET api/hsptlmmt/:id
// @access Public
router.put('/:id', (req, res) => {
  Hsptl.findByIdAndUpdate(req.params.id, req.body)
    .then((hsptlmmt) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/hsptlmmt/:id
// @access Public
router.delete('/:id', (req, res) => {
  Hsptl.findByIdAndRemove(req.params.id, req.body)
    .then((hsptlmmt) => res.json({ mgs: 'User entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a User' }));
});

module.exports = router;