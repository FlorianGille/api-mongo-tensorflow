const mongoose = require('mongoose');

const TensorFlowSchema = mongoose.Schema({
  name: String,
  date: String,
  weight: Number,
  resultPercent: Number,
  resultType: String,
});

module.exports = mongoose.model('Model', TensorFlowSchema, 'TensorFlowResult')