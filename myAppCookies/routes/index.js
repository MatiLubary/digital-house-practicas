var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {




  res.render('index', { 
    title: 'Express',
    accept_cookies : req.cookies.accept_cookies == 'true'  
  });
});

router.get('/contacto', function(req, res){
  res.render('contact', {
  accept_cookies : req.cookies.accept_cookies == 'true'  
  })
})



router.get('/colores', function(req, res, next){

if (req.body.saveColor != undefined) {

  
  /* req.session.color = */ //Si tuviese una base de datos JSON con info del usuario, deberia guardar su color de session preferido ahi??

  // Deberia guardarse con session o cookies. No lo mencionado arriba.

}


  req.session.color = req.query.bg_color

  res.render('selecColor', {color: req.session.color})
})

router.get('/coloresResult', function(req, res, next){

  req.session.color = req.query.bg_color

  res.send(req.session.color)
})
  

module.exports = router;
