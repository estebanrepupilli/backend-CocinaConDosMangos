'use strict'

var express = require('express');
var RecetaController = require('../controllers/receta');

var router = express.Router();

router.get('/home',RecetaController.home);
router.post('/test',RecetaController.test);
router.post('/save-receta',RecetaController.saveReceta);
router.get('/recetas',RecetaController.getRecetas);

module.exports = router;