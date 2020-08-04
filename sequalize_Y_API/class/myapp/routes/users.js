var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const users = require("../data/users.json")
var authMiddleware = require("../middlewares/auth")

const authController = require("../controllers/authController")



const db = require('../db/models');



/* GET users listing. */
router.get('/', authMiddleware, function(req, res, next) {
  
  res.render('users/dashboard', {
    user : req.session.user 
  });
});


router.get("/logout", function (req, res){
  req.session.destroy(() => {
    res.redirect('/users/login')
  })
})

router.post('/user', (req, res) => {
  db.users.create({
    username: req.body.email,
    password: req.body.password
  }).then(user => res.json(user));
});


router.get("/login", authController.showForm)

router.post("/login", authController.login)


  




router.get("/register", function (req, res){
  res.render("users/register", {
  })
})


let registrationValidation = [
  check('email').isEmail().withMessage('El campo email es invalido'),
]


router.post("/register", registrationValidation, function (req, res){

  db.users.create({
    email: req.body.email,
    password: req.body.password,
  })
  res.redirect('/movies')
})


 
module.exports = router;
