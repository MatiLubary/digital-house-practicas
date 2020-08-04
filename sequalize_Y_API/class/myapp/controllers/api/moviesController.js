const db = require('../../db/models')

let moviesController = {
    list: function(req, res){
        db.peliculas.findAll()
        .then(movie => {
            movie.forEach(element => {
                element.setDataValue("endpoint", "/api/movies/" + element.id)
            });


            let respuesta = {
                meta: {
                    status: 200,
                    total: movie.length,
                    url: '/api/movies'
                },
                data: movie
            }


          res.json(respuesta)
    })
},

find: function(req, res){
    db.peliculas.findByPk(req.params.id)
    .then(movie => {
      res.json(movie)
    })
    
},

store: function(req, res){
    db.peliculas.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        length: req.body.length
      })
      res.json({
          status: 200
      })
    
},


update: function(req, res){
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
      res.json({
          status: 200
      })
    
},


delete: function(req, res){
    db.peliculas.destroy({
      
        where: {
          id : req.params.id
        }
      });
      res.json({
          status: 200
      })
    
}


}



module.exports = moviesController
