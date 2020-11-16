var express = require('express');
var router = express.Router();
const {MarcaController} = require('../src/controllers');

router.post('/create', MarcaController.create);
router.post('/delete/:id', MarcaController.delete);
router.post('/update/:id', MarcaController.update);
router.get('/', MarcaController.list);


module.exports = router;