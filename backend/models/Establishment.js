const mongoose = require('mongoose');
const { Schema } = mongoose;

const establishmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    addressDetails: {
      type: String,
      default: '',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    Coordinates: {
      type: {
        type: String,
        enum: ['Point'], // GeoJSON type
        required: true,
        default: 'Point',
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
        validate: {
          validator: function (value) {
            return value.length === 2;
          },
          message: 'Coordinates must be an array of [longitude, latitude]',
        },
      },
    },
  },
  { timestamps: true }
);

// 🗺️ Índice geoespacial para permitir buscas por localização
establishmentSchema.index({ Coordinates: '2dsphere' });

module.exports = mongoose.model('Establishment', establishmentSchema);
