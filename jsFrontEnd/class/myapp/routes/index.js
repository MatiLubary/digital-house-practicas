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



router.get('/create', function (req, res){
  res.render('createMovie')
  })
 /* GET - Form to create */




router.post('/movies', function (req, res){
  db.peliculas.create({
    title: req.body.title,
    rating: req.body.rating,
    awards: req.body.awards,
    length: req.body.length
  })
  res.redirect('/movies')
}); /* POST - Store in DB */






router.get('/movies/detail/:id', function (req, res){
  db.peliculas.findByPk(req.params.id)
  .then(movie => {
    res.render('detalleMovie', {movie: movie})
  })

})


router.get('/edit/:id', function (req, res){
  db.peliculas.findByPk(req.params.id)
  .then(movie => {
    res.render('editMovie', {movie: movie})
  })
}); 

router.put('/edit/:id', function (req, res){
  db.peliculas.update({
    title: req.body.title,
    rating: req.body.rating,
    awards: req.body.awards,
    length: req.body.length
  },
  {
    where: {
      id: req.params.id
    }
  })

  res.redirect('/movies')
} ); 


router.delete('/delete/:id', function (req, res) {

    db.peliculas.destroy({
      
      where: {
        id : req.params.id
      }
    });
    res.redirect('/movies')
    
})


module.exports = router;
