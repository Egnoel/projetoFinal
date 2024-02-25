const mongoose = require('mongoose');
const { Schema } = mongoose;

const establishmentSchema = new Schema({
  name: String,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
});

module.exports = mongoose.model('Establishment', establishmentSchema);
