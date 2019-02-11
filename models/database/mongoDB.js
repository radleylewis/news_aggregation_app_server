const mongoose = require('mongoose');
const schemas = require('../schemas/schemas.js');
const config = require('../../config/config.js');

mongoose.connect(config.mongoAddress, { useNewUrlParser: true }, function (err) {
	if (!err) console.log('connected to the database'); // eslint-disable-line no-console
	else console.error(err); // eslint-disable-line no-console
});

const Users = mongoose.model('user', schemas.userSchema);
const SourceData = mongoose.model('article', schemas.articlesSchema);
const Sources = mongoose.model('source', schemas.sourcesSchema);

exports.addUser = function (incoming) {
  const User = new Users({
    username: incoming.username,
    password: incoming.password,
		rstname: incoming.firstname,
    surname: incoming.surname,
    email: incoming.email,
    preferences: incoming.preferences,
  });

  User.save(function (error, result) {
    if (error) {
      console.error(error); // eslint-disable-line no-console
    };
      console.log('Added new user with the following credentials: ', result); // eslint-disable-line no-console
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

  Users.findOneAndUpdate(queryUser, updateUser, options, function(err, result) { // eslint-disable-line
		if (err) {
			console.log('Error updating user sources DB'); // eslint-disable-line
		} else {
			console.log('User source favourites updated'); // eslint-disable-line
		}
	});
};

exports.getArticles = function () {
	return SourceData.find();
};

exports.getSourceList = function () {
	return Sources.find();
};
