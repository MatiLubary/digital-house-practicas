var express = require('express');
var router = express.Router();
const db = require('../db/models')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* router.delete('/delete/:id', function (req, res) {

  db.peliculas.destroy({
    
    where: {
      id : req.params.id
    }
  });
  res.send('deleted')
  
}) */



module.exports = router;
