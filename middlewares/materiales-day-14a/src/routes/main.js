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

const mainController = require('../controllers/mainController');

router.get('/', mainController.root); /* GET - home page */

router.get('/services', mainController.search); /* GET - search results */

router.get('/services/design', mainController.search); /* GET - search results */


module.exports = router;

