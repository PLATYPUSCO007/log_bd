var express = require('express');
var router = express.Router();
const usersRouter = require('./users.route');
const marcaRouter = require('./marcas.route');
const {AuthMiddleware} = require('../src/middlewares');

router.use('/users', usersRouter);
router.use('/marcas', AuthMiddleware, marcaRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Esta logueado' });
});

router.get('/home', AuthMiddleware, function(req, res, next){
  res.render('index', { title: 'Esta en Home' });
});


module.exports = router;
