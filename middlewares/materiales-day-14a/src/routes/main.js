const express = require('express');
const router = express.Router();

const path = require('path');

const mainController = require('../controllers/mainController');

router.get('/', mainController.root); /* GET - home page */

router.get('/services', mainController.services); /* GET - search results */

router.get('/services/design', mainController.design); /* GET - search results */


module.exports = router;

