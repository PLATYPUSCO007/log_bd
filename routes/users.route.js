var express = require('express');
var router = express.Router();
const {UserController} = require('../src/controllers');
const {LogController} = require('../src/controllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', UserController.createUser);
router.post('/login', LogController.In);
router.post('/logout', LogController.Out);
router.get('/list', UserController.listUsers);

module.exports = router;
