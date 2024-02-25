const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
  address: String,
  coordinates: [{ latitude: Number, longitude: Number }],
});

module.exports = mongoose.model('Address', addressSchema);
