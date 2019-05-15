function MostrarMensajeRandom(){
	alert("Mensaje random");
}
/*Esto implica que siempre que se ejecute esta pagina se muestra ejecuta la sig funcion/
window.onload = MensajeRandom;*/

function EjecutaMensaje(){
	document.getElementsByTagName("p") [0].onclick=MostrarMensajeRandom;
}

window.onload = EjecutaMensaje;