var express = require('express');
var router = express.Router();

const  productos = require('../data/productsDataBase.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { productos: productos });
});

module.exports = router;
