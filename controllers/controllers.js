const mongoDB = require('../models/database/mongoDB.js');
const router = require('../router.js');
const btoa = require('atob');

exports.addUser = async (req, res) => {
  const data = await mongoDB.addUser(req.body);
  res.status(200).send(data);
};

exports.signIn = async (req, res) => {
  const basic = req.headers.authorization.split(' ');
  if (basic.length < 2 && basic[0] !== 'Basic') {
    throw new Error('Missing authentication data');
  }
  const [username, password] = btoa(basic[1]).split(':');
  const usr = await mongoDB.getUser(username);
  const stories = await mongoDB.getArticles();

  if (usr && usr.password === password) {
    const responseData = {
      firstname: usr.firstname,
      surname: usr.surname,
      email: usr.email,
      preferences: usr.preferences,
      username: usr.username,
      stories: stories
    }
    res.status(200).send(responseData);
    return;
  } else {
    res.status(401);
    return;
  }
}

exports.addPrefSource = async (req, res) => {
  console.log(req.body.username);
  const userSourceList = await mongoDB.addUserSource(req.body.username, req.body.sources);
  res.status(200);
}

exports.deploySources = async (req, res) => {
  const sourceList = await mongoDB.getSourceList();
  res.status(200).send(sourceList);
}

exports.deployStories = async (req, res) => {
  const storyList = await mongoDB.getArticles(req.body.preferences);
  res.status(200).send(storyList);
}
