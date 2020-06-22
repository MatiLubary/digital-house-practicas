// ************ Require's ************
const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars')  
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

var upload = multer({storage: storage});

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.root); /* GET - home page */
router.get('/search', mainController.search); /* GET - search results */


router.get('/register', mainController.register);  
router.post('/profile', upload.any(), mainController.create);  

module.exports = router;
