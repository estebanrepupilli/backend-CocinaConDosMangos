'use strict'

var mongoose= require('mongoose');
var app=require('./app');
var port=3700;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://recetario:recetario@cluster0.jdhys1r.mongodb.net/?retryWrites=true&w=majority')
		.then(()=> {
			console.log("conexion establecida con exito loco");

			//creacion del servidor
			app.listen(port,()=>{
				console.log("servidor corriendo correctamente:localhost:3700");
			});

		})

		.catch(err => console.log(err));