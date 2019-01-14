const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.articlesSchema = new Schema({
  sourceName: {
    type: String,
  },
  sourceID: {
    type: String,
  },
  stories: {
    type: Array,
  }
});

exports.sourcesSchema = new Schema({
  id: {
    type: String,
    required: [true, 'News source ID required...']
  },
  name: {
    type: String,
    required: [true, 'News source name required...']
  },
  description: {
    type: String,
    required: [true, 'News source description required...']
  },
  url: {
    type: String,
    required: [true, 'News source url required...']
  },
  category: {
    type: String,
    required: [true, 'News source category required...']
  },
  country: {
    type: String,
    required: [true, 'News source country required...']
  },
  language: {
    type: String,
    required: [true, 'News source language required...']
  },
  rating: {
    type: Number,
    default: 1
  }
});

exports.userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username required...']
  },
  password: {
    type: String,
    required: [true, 'Password required...']
  },
  firstname: {
    type: String,
    required: [true, 'Firstname required...']
  },
  surname: {
    type: String,
    required: [true, 'Surname required...']
  },
  email: {
    type: String,
    required: [true, 'Email required...']
  },
  preferences: {
    type: Array,
    required: [false],
    default: 'ALL'
  }
});
