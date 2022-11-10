'use strict'

var Receta = require('../models/receta');

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

	saveReceta: function(req,res){

		var receta = new Receta();

		var params = req.body;

		console.log(params);
		
		receta.nombre = params.nombre;
		receta.ingredientes=params.ingredientes;
		receta.contenido = params.contenido;
	//metodo para guardar en base de datos
		receta.save((err, recetaStored) => {
			console.log(err);
			if(err) return res.status(500).send({message: 'Error al guardar la receta'});

			if(!recetaStored) return res.status(404).send({message:'No se ha podido guardar la receta'});
		
			return res.status(200).send({receta: recetaStored });
			
		});

	},

	getRecetas: function(req,res){

		Receta.find({}).exec((err, recetas)=> {

			if(err) return res.status(500).send({message:'Error al devolver los datos'});

			if(!recetas) return res.status(404).send({message:'No hay recetas que mostrar'});

			return res.status(200).send({recetas});
		});

	}

};

module.exports = controller;