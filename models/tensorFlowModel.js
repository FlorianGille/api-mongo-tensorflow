const mongoose = require('mongoose');

const TensorFlowSchema = mongoose.Schema({
  name: String,
  date: String,
  weight: Number,
  results: [{
    type: { type: String, required: true },
    percent: { type: Number, required: true },
  }]
});

module.exports = mongoose.model('Model', TensorFlowSchema, 'TensorFlowResult')