const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    images: [String],
    category: {
      type: String,
      enum: ['food', 'drink', 'household'],
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    Establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Establishment',
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
