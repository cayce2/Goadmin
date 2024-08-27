const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const { date } = req.query;
    let query = {};

    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1);

      query.date = { $gte: startDate, $lt: endDate };
    }

    const booking = await Booking.find(query);
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
