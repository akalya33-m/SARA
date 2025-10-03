const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  fullName: String,
  mobileNumber: String,
  vehicleNumber: String,
  location: String,
  issues: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);
