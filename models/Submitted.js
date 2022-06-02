const mongoose = require('mongoose');

const SubmittedSchema = new mongoose.Schema({
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
  },
  status: {
    type: String
  }
});

module.exports = Submitted = mongoose.model('submitted', SubmittedSchema);