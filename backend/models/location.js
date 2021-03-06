const mongoose = require('mongoose');

/**
 * Declares the locationSchema and their types.
 */

const locationSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  ratingNumber: { type: Number, required: false }
});

module.exports = mongoose.model('Location', locationSchema);
