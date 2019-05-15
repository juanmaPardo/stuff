//El built-in de las clases es con prototypes, lo de decir User.prototype.constructor = ....
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
user.sayHi();


//Para heredar de otras clases
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }

}

// Inherit from Animal
//Como funciona el super? Bueno, cada funcion esta atada a su clase, es decir tiene una property que no se
//puede cambiar que se llama HomeObject que le dice de la clase a la que esa funcion pertenece, esto es
//lo que usa super para encontrar el parent method que llamamos
class Rabbit extends Animal {
/*generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
*/
	//Siempre se llama al super primero y despues se usa el this, sino nos tira errror
 	constructor(name, earLength) {
    	super(name);
    	this.earLength = earLength;
  	}
  	hide() {
    	alert(`${this.name} hides!`);
  	}
  	//Para hacer on override
  	stop() {
   		super.stop(); // call parent stop
    	this.hide(); // and then hide
  	}
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!



//Metodos estaticos, son de la clase , no de las instancias de la clase
//Static methods are also used in database-related 
//classes to search/save/remove entries from the database.
//Dato importante, los metodos y variables estaticas son heredadas y pueden ser usadas por la clase hija
//de la misma manera que la usa la clase padre
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article("Mind", new Date(2019, 1, 1)),
  new Article("Body", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // Body