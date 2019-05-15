"use strict"

function Personav2(nombre,edad){
	this.nombre = nombre;
	this.edad = edad;
	this.difEdades = function (otraPersona){
		return Math.abs(this.edad - otraPersona.edad);
	};
}


let juan = new Personav2("Juan",18);
let carlos = new Personav2("Carlos",15);
let difEdadJuanCon = juan.difEdades.bind(juan);

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

function Casav2(precio,ciudad,localidad){
	this.precio = precio;
	this.ciudad = ciudad;
	this.localidad = localidad;
	Object.defineProperty(this,"ubicacionCasa",{
		get(){
			return console.log("En " + ciudad + " en la localidad de " + localidad);
		}
	})
	this.valorTotal = function(cantCuotas,garantia){

		function precioConXCoutas(){
			return cantCuotas*5000;
		}

		function garantiaUnAnio(){
			return 50000;
		}

		return (garantia) ? (precioConXCuotas()+this.precio+garantiaUnAnio()) : (precioConXCoutas() + this.precio);
	}
}

function partialApplication(funcion,...argumentos){
	return function(){
		funcion.call(this,...argumentos);
	}
}

let casaBurzaco = new Casav2(2000000,"Buenos Aires","Burzaco");
let pagoDoceCuotas = partialApplication.bind(casaPalermo,casaPalermo.valorTotal,12);

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
//Cuando javascript no encuentra algo en un objeto lo busca en su prototype, es como una clase que hereda
//cabe destacar que solo puede heredar de una sola clase

//The answer is simple: this is not affected by prototypes at all.
//No matter where the method is found: in an object or its prototype. 
//In a method call, this is always the object before the dot.
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true

let longEar = {
  earLength: 10,
  __proto__: rabbit//Does the same as before
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;//Para setear un prototype cuando tenemos un constructor









