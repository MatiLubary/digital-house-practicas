const db = require('../db/models')

let actorsController = {
    list: function(req, res){
        db.actors.findAll()
        .then(actor => {
          res.render('actors', {actors: actor})
      
        })
        .catch(err => {
          console.log(err)
          res.json({'error': true})
      
        })
      

},

find: function (req, res){
    db.actors.findByPk(req.params.id)
    .then(actor => {
      res.render('detalleActor', {actors: actor})
    })
    
},

store: function (req, res){
    db.actors.create({
      first_name: req.body.title,
      last_name: req.body.rating,
      lrating: req.body.length
    })
    res.redirect('/actors')
},

updateFind: function (req, res){
    db.actors.findByPk(req.params.id)
    .then(actor => {
      res.render('editActor', {actors: actor})
    })
},





update: function (req, res){
    db.actors.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      rating: req.body.rating
    },
    {
      where: {
        id: req.params.id
      }
    })
    res.redirect('/actors')
  
},


delete: function (req, res) {

    db.actors.destroy({
      
      where: {
        id : req.params.id
      }
    });
    res.redirect('/actors')
    

}
}



module.exports = actorsController
