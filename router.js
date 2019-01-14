const router = require('express').Router();
const fs = require('fs');

const controllers = require('./controllers/controllers.js');

router.post('/addUser', controllers.addUser);
router.post('/user-source', controllers.addPrefSource)
router.get('/sign-in', controllers.signIn);
router.get('/deploySources', controllers.deploySources);

module.exports = router;
