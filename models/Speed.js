const mongoose = require('mongoose');

const SpeedSchema = new mongoose.Schema({
  title: {
    type: String
  },
  authors: {
    type: String
  },
  source: {
    type: String
  },
  pubdate: {
    type: Date
  },
  doi: {
    type: String
  },
  claim: {
    type: String
  },
  evidence: {
    type: String
  }
});

module.exports = Speed = mongoose.model('speed', SpeedSchema);