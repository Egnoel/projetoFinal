const mongoose = require('mongoose');
const { Schema } = mongoose;

const searchHistorySchema = new Schema(
  {
    searchTerm: String,
    date: Date,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SearchHistory', searchHistorySchema);
