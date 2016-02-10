'use strict';

/**
Quacker Interface:
  quack() //has the quacker quack!
**/

class MallardDuck { //is a Quacker
  quack() {
    console.log('quack!');
  }
}

class RedheadDuck { //is a Quacker
  quack() {
    console.log('quack');
  }
}

class DuckCall { //is a Quacker
  quack() {
    console.log('Kwak');
  }
  
}

class RubberDuck { //is a Quacker
  quack() {
    console.log('Sqeak');
  }
}

class Goose { //NOT a Quacker
  honk() {
    console.log('HOOONK');
  }
}

class GooseAdapter { //is a Quacker
  constructor(goose){
    this._goose = goose;
  }
  
  quack() {
    this._goose.honk();
  }
}

//CHANGE 2: add a decorator
var numberQuacks = 0; //"static" variable, private to module

class QuackCounter { //is a Quacker
  constructor(quacker) {
    this._quacker = quacker;
  }
  
  quack(){
    this._quacker.quack();
    numberQuacks++; //count the quack
  }
  
  static get quacks(){
    return numberQuacks;
  }  
}


//export all the classes
module.exports.MallardDuck = MallardDuck;
module.exports.RedheadDuck = RedheadDuck;
module.exports.DuckCall = DuckCall;
module.exports.RubberDuck = RubberDuck;
module.exports.Goose = Goose;
module.exports.GooseAdapter = GooseAdapter;
module.exports.QuackCounter = QuackCounter;