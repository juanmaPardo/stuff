/*
This is called functional class pattern.
In the functional class pattern, local variables and nested functions inside User, 
that are not assigned to this, are visible from inside, but not accessible by the outer code.
*/


function User(name, birthday) {
  // only visible from other methods inside User
  function calcAge() {
    return new Date().getFullYear() - birthday.getFullYear();
  }

  this.sayHi = function() {
    alert(`${name}, age:${calcAge()}`);
  };
}

let user = new User("John", new Date(2000, 0, 1));
user.sayHi(); // John, age:17


/*Se dice que las prototype-class are the most important and used in practise, to do that
you have to set the basic propertys of an object with a function and then add the methods
using prototypes, here's an example.
So, there is a widely known agreement that internal properties and methods are prepended 
with an underscore "_". Like _name or _calcAge(). Technically, that’s just an agreement, 
the outer code still can access them. But most developers recognize the meaning of "_" 
and try not to touch prefixed properties and methods in the external code.
*/

function UserV2(name, birthday) {
  this._name = name;
  this._birthday = birthday;
}

UserV2.prototype._calcAge = function() {
  return new Date().getFullYear() - this._birthday.getFullYear();
};

UserV2.prototype.sayHi = function() {
  alert(`${this._name}, age:${this._calcAge()}`);
};

let userV2 = new UserV2("John", new Date(2000, 0, 1));
userV2.sayHi(); // John, age:17

/*
Here are the advantages over the functional pattern:

	In the functional pattern, each object has its own copy of every method. 
We assign a separate copy of this.sayHi = function() {...} and other methods in the constructor.

	In the prototypal pattern, all methods are in User.prototype that is shared between all user objects. 
An object itself only stores the data.
*/

//Entonces, como deberian heredar las clases hechas con prototype de otras clases de su mismo estilo?
function Animal(name) {
  this.name = name;
}

// All animals can eat, right?
Animal.prototype.eat = function() {
  alert(`${this.name} eats.`);
};

// Same Rabbit as before
function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.jump = function() {
  alert(`${this.name} jumps!`);
};

// setup the inheritance chain
Rabbit.prototype.__proto__ = Animal.prototype; // (*)

let rabbit = new Rabbit("White Rabbit");
rabbit.eat(); // rabbits can eat too
rabbit.jump();



//Pero nos podemos evitar esto usando 'class' syntax sugar

