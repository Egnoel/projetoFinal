const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  images: [String],
  category: String,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('Product', productSchema);
