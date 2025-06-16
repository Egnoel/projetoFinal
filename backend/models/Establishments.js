const mongoose = require('mongoose');
const { Schema } = mongoose;

const establishmentSchema = new Schema({
  name: String,
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
    },
  ],
  storeType: {
    type: String,
    enum: ['formal', 'informal'],
    required: true,
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
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
});

module.exports = mongoose.model('Establishment', establishmentSchema);
