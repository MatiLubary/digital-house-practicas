const users = require("../data/users.json")


module.exports = {

    showForm : function (req, res) {
        res.render('users/login')
    },

    login : function (req, res) {
        let user = users.find(user => {
        return user.email == req.body.email && user.password == req.body.password
      })

      if (user) {
    
        req.session.user = user

        if (req.body.recordame != undefined){

            res.cookie('recordame', 
                user.email, { maxAge: 60000 })

        }
    
        res.redirect('/users')
      } else {
        res.send('No se quien sos')
      }
    }

}