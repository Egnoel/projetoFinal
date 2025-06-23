const mongoose = require('mongoose');
const { Schema } = mongoose;

const priceSchema = new Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Establishment',
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    images: [String],
    comment: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Price', priceSchema);
