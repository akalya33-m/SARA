const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
  shopName: String,
  contactName: String,
  contactNumber: String,
  location: String,
  services: [String]
});

module.exports = mongoose.model('Mechanic', mechanicSchema);
