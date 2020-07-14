var express = require('express');
const controller = require('../controllers/indexController');
var router = express.Router();

const db = require('../db/models')

const mainController = require('../controllers/indexController');

/* GET home page. */
router.get('/', mainController.root

/* function(req, res, next) {
  res.render('index', { title: 'Express' });
} */

);


router.get('/movies', function(req, res){
  db.Movie.findAll()
  .then(movie => {
    res.render('movies', {movies: movie})

  })
  .catch(err => {
    console.log(err)
    res.json({'error': true})

  })

})


router.get('/movies/detail/:id', function (req, res){
  db.Movie.findByPk(req.params.id)
  .then(movie => {
    res.render('detalleMovie', {movie: movie})
  })

})


router.get('movies/edit/:id')


module.exports = router;
