const mongoose = require('mongoose');
const { Schema } = mongoose;

const establishmentSchema = new Schema({
  name: String,
  addressDetails: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  Coordinates: {
    type: {
      type: String,
      enum: ['Point'], // 'Point' for GeoJSON
      required: true,
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
});

module.exports = mongoose.model('Establishment', establishmentSchema);
