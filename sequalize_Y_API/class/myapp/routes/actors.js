var express = require('express');
var router = express.Router();
var actorsController = require('../controllers/actorsController')

router.get('/', actorsController.list)

router.get('/detail/:id', actorsController.find)

router.post('/', actorsController.store)



router.get('/edit/:id', actorsController.updateFind)
router.put('/edit/:id', actorsController.update)

router.delete('/', actorsController.delete)



/* 
router.get('/edit/:id', 


 */

module.exports = router;
