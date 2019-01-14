const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/news_app_db", function (err) {
  if (!err) console.log('connected to the database');
  else console.log(err);
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
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

const articlesSchema = new Schema({
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

const sourcesSchema = new Schema({
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
    required: [false],
    default: 1.0
  }
})

const Users = mongoose.model('user', userSchema);
const SourceData = mongoose.model('article', articlesSchema);
const Sources = mongoose.model('source', sourcesSchema);

exports.addUser = function (incoming) {
  const User = new Users({
    username: incoming.username,
    password: incoming.password,
    firstname: incoming.firstname,
    surname: incoming.surname,
    email: incoming.email,
    preferences: incoming.preferences,
  });

  User.save(function (error, result) {
    if (error) {
    console.error(error);
    };
    return result;
  });
}

exports.getUser = function ( username ) {
  return Users.findOne({ username: username });
}

exports.placeArticles = function ( incoming ) {
  const query = { sourceName: incoming.sourceName };
  const update = { stories: incoming.stories, sourceID: incoming.sourceID };
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };

  SourceData.findOneAndUpdate(query, update, options, function(error, result) {
    if (error) {
      console.log('Error updating stories in DB');
    } else {
      console.log('Fetched articles from ' + incoming.sourceName);
    }
  });
}

exports.addUserSource = function (username, sources) {
  const queryUser = { username: username };
  const updateUser = { preferences: sources };
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };

  Users.findOneAndUpdate(queryUser, updateUser, options, function(err, result) {
    if (err) {
      console.log('Error updating source list in DB');
    } else {
      console.log('DB updated with source list');
    }
  });
}

exports.getArticles = function () {
  return SourceData.find();
}

exports.getSourceList = function () {
  return Sources.find();
}
