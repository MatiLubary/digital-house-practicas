var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/product/detail/id/category', function(req, res, next) {
  res.send('prodDetail');
});

module.exports = router;
