const mongoose = require('mongoose');
const { Schema } = mongoose;

const searchHistorySchema = new Schema(
  {
    searchTerm: String,
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SearchHistory', searchHistorySchema);
