'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');

var router = express.Router();

router.get('/home',UsuarioController.home);
router.post('/test',UsuarioController.test);
router.post('/save-usuario',UsuarioController.saveUsuario);

module.exports = router;