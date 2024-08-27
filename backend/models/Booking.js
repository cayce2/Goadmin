const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  route: { type: String, required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);
