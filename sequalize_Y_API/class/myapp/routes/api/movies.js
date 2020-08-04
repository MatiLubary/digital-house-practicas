var express = require('express');
var router = express.Router();
var moviesAPIController = require('../../controllers/api/moviesController')

router.get('/', moviesAPIController.list)

router.get('/:id', moviesAPIController.find)

router.post('/', moviesAPIController.store)

router.put('/', moviesAPIController.update)

router.delete('/', moviesAPIController.delete)



module.exports = router;