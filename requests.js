const express = require('express');
const router = express.Router();
const Request = require('../models/Request');
const Mechanic = require('../models/Mechanic');

router.post('/', async (req, res) => {
  try {
    const request = new Request(req.body);
    await request.save();

    const nearbyMechanics = await Mechanic.find({
      location: req.body.location,
      services: { $in: req.body.issues }
    });

    res.status(200).json(nearbyMechanics);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
