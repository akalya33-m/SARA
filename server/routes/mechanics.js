const express = require('express');
const router = express.Router();
const Mechanic = require('../models/Mechanic');

router.post('/', async (req, res) => {
  try {
    const mechanic = new Mechanic(req.body);
    await mechanic.save();
    res.status(201).send('Mechanic registered');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
