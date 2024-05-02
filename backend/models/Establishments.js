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
});

module.exports = mongoose.model('Establishment', establishmentSchema);
