var express = require('express');
var router = express.Router();

const db = require('../db/models')

const mainController = require('../controllers/indexController');
const { render } = require('ejs');

/* GET home page. */
router.get('/', mainController.root

/* function(req, res, next) {
  res.render('index', { title: 'Express' });
} */
);


router.get('/movies', function(req, res){
  db.peliculas.findAll()
  .then(movie => {
    res.render('movies', {movies: movie})

  })
  .catch(err => {
    console.log(err)
    res.json({'error': true})

  })

})


router.get('/movies/detail/:id', function (req, res){
  db.peliculas.findByPk(req.params.id)
  .then(movie => {
    res.render('detalleMovie', {movie: movie})
  })

})


router.delete('/delete/:id', function (req, res) {

    db.peliculas.destroy({
      
      where: {
        id : req.params.id
      }
    });
    res.redirect('/movies')
    
})


module.exports = router;
