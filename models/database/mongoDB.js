const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const schemas = require('../schemas/schemas.js');
const config = require('../../config/config.js');

mongoose.connect(config.mongoAddress, function (err) {
  if (!err) console.log('connected to the database');
  else console.log(err);
});

const Users = mongoose.model('user', schemas.userSchema);
const SourceData = mongoose.model('article', schemas.articlesSchema);
const Sources = mongoose.model('source', schemas.sourcesSchema);

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
      console.log('Added new user with the following credentials: ', result);
  });
}

exports.getUser = function ( username ) {
  return Users.findOne({ username: username });
}

exports.damageRating = function ( sourceName ) {
  const query = { name: sourceName };
  const update = { $inc: { rating: -1 } };
  const options = null;
  
  Sources.findOneAndUpdate(query, update, options, function(error, result) {
    if (error) {
      return console.log('Error changing rating');
    } else {
      return console.log('Noted rating change for ' + sourceName);
    }
  });
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
      console.log('Error updating user sources DB');
    } else {
      console.log('User source favourites updated');
    }
  });
}

exports.getArticles = function () {
  return SourceData.find();
}

exports.getSourceList = function () {
  return Sources.find();
}
