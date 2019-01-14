const router = require('express').Router();
const fs = require('fs');

const controllers = require('./controllers/controllers.js');

router.get('/deploySources', controllers.deploySources);
router.get('/sign-in', controllers.signIn);
router.post('/addUser', controllers.addUser);
router.post('/user-source', controllers.addPrefSource);
router.post('/faker', controllers.damageRating);

module.exports = router;
