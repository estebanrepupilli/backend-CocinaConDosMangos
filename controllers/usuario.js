'use strict'

var Usuario = require('../models/usuario');

var controller = {

	home: function(req, res){
		return res.status(200).send({
			message:'Soy la home'
		});
	},

	test: function(req,res){
		return res.status(200).send({
			message:'Soy el metodo test'
		});
	},

	saveUsuario: function(req,res){

		var usuario = new Usuario();

		var params = req.body;
		
		usuario.nombre = params.nombre;
		usuario.apellido = params.apellido;
		usuario.mail = params.mail;
		usuario.mensaje = params.mensaje;
	//metodo para guardar en base de datos
		usuario.save((err, usuarioStored) => {
			console.log(err);
			if(err) return res.status(500).send({message: 'Error al guardar el usuario'});

			if(!usuarioStored) return res.status(404).send({message:'No se ha podido guardar el usuario'});
		
			return res.status(200).send({usuario: usuarioStored});
			
		});

	}

};

module.exports = controller;