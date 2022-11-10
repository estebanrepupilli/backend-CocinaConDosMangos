'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecetaSchema = Schema({
	nombre: String,
	ingredientes:String,
	contenido:String
});

module.exports = mongoose.model('Receta',RecetaSchema);