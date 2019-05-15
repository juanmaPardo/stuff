'use strict'

//Constructores
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,        // by key "age" store value 30
};

// get fields of the object:
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;
alert( "isAdmin" in user ); // true, user.isAdmin exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// overwrite name, add isTall
Object.assign(user, { name: "Pete", isTall: true });

delete user.age;

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("Bob", 15);
alert(user.name); // Bob


//One way to display all the contents of an object
for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

//Rest parameters, es para llamar a funciones con infinitos parametros, para eso los tenemos que
//juntar a todos los restantes en una lista, eso se hace de la siguiente manera

function sumAll(...valores){
	let result = 0;
	for(let val of valores) result += val;
	return result;
}

function doesSomething(firstParam,secondParam,...theRest){
	//Does something with the first two and the rest of them will be in the array called theRest
}

function sumValues(firstVal,secondVal){
	return firstVal + secondVal;
}

//Tambien funciona a la inversa
let array = [2,3];
alert( sumValues(...array));
