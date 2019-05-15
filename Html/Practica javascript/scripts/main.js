'use strict'
/*document.querySelector('h1').innerHTML = 'ESTE ES EL NUEVO TITULO';

var miBoton = document.querySelector('button');
var miTitutlo = document.querySelector('h1');

var miImage = document.querySelector('img');
miImage.onclick = function{
	var miSrc = miImage.getAttribute('src');
	if(miSrc === 'desk.png'){
		miImage.setAttribute('src','logo.png');
	}
	else{
		miImage.setAttribute('src','desk.png');
	}
}

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}*/

alert("I'm JavaScript!");

let name = "hello";

alert(name);

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

/*var miBoton = document.getElementById("boton")
miBoton.onclick = function() {
    myFunction();
}*/
//window.onload = myFunction;

/*
var x = {
	nombre:"juan", 
	apellido:"rodriguez", 
	edad:15,
	nombreCompleto = function(){
		return this.nombre + this.apellido;
	}
};

function showFullName(){
	alert(x.nombreCompleto);
*/
let numero = Number("123");

let edad = prompt("Edad"); //Si no responde retorna undefined

let isOld = confirm("Are you old?"); //Si pone aceptar devuelve true, si pone cancelar devuelve false

let accessAllowed = (edad > 18) ? true : false; //Operador terniario

let message = (edad < 3) ? 'Hi, baby!' :
  (edad < 18) ? 'Hello!' :
  (edad < 100) ? 'Greetings!' :
  'What an unusual age!'; //Operador terniario anidado

/*
	while(something){
	
	}
	for(let i=0 ; i < something.length ; i++){
	
	}
	switch(a){
		case something:
			doSomething;
			break;
		default:
			doSomething
	}
*/

//Si no nos mandan los parametros podemos elegir valores defaults, tambien podemos hacer llamadas
//a funciones como parametro por default
//NOTA: si no existe return y es un print x ejemplo la funcion retorna siempre undefined
function printName(name = "No name given",lastName = "No last Name Given"){
	alert(name + lastName);
}


function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}


// usage: functions showOk, showCancel are passed as arguments to ask
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

for (let i = 0; i < 5; i++) {
  console.log("value", i);
}

alert(edad);

/*
Lamda expressions


let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, use return to get results
};

*/