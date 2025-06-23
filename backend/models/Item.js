const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    category: {
      type: String,
      enum: ['Alimentos', 'Higiene', 'Bebidas', 'Outro'],
      default: 'Outro',
    },
    image: String,
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', ItemSchema);
