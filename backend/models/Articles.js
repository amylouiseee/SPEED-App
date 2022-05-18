const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  pubyear: {
    type: Date
  },
  doi: {
    type: String,
    required: true
  },
  claim: {
    type: String
  },
  evidence: {
    type: String
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);