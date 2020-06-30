module.exports = function(req, res, next){

    // if el query string dice accept=true, el user acepta cookies
    // guardamos en la cookie false para que no se muestre el cartel
    if (req.query.accept == 'true'){
        res.cookie('showCookiesAlert', false)
        res.locals.showCookiesAlert = false
        return res.redirect('/')
      }
    
    
    
    //Si todavia no acepto las cookies
    if (!req.cookies.accept_cookies){
        //se muestra el cartel
      res.cookie('showCookiesAlert', true)
      res.locals.showCookiesAlert = true
    }


    next()

}