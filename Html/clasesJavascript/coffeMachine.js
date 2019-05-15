//Protected propertys are prefixed with an underscore	
//private propertys are prefixed with #, lo privado no puede ser accedido por las clases que
//heredan de la misma ni por el outside
class CoffeeMachine {
  _waterAmount = 0;
  #waterLimit = 200;

  #checkWater(water) {
    if (value < 0) throw new Error("Negative water");
    if (value > this.#waterLimit) throw new Error("Too much water");
  } 

  setWaterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

  getPower(){//Si no hacemos un setter, la variable es read-only
  	return this._power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;



//Esto es muy util aveces, saber si es una instancia de una clase
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true