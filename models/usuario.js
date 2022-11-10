'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
	nombre: String,
	apellido: String,
	mail:String,
	mensaje:String
});

module.exports = mongoose.model('Usuario',UsuarioSchema);
//Mongoose pone el primer parametro en miniscula y lo pluraliza
//en este caso yo en mongo tengo usuarios como colleción