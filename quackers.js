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

var numberQuacks = 0; //"static" variable, private to module

class QuackCounter { //is a Quacker
  constructor(quacker) {
    this._quacker = quacker;
  }
  
  quack(){
    this._quacker.quack();
    numberQuacks++;
  }
  
  static get quacks(){
    return numberQuacks;
  }  
}

/**
AbstractDuckFactory Interface:
  createMallardDuck()
  createRedheadDuck()
  createDuckCall()
  createRubberDuck()
**/

class CountingDuckFactory { //is an AbstractDuckFactory
  createMallardDuck(){
    return new QuackCounter(new MallardDuck());  
  }    
  
  createRedheadDuck(){
    return new QuackCounter(new RedheadDuck());      
  }
  
  createDuckCall() {
    return new QuackCounter(new DuckCall());          
  }
  
  createRubberDuck() {
    return new QuackCounter(new RubberDuck());              
  }
}

//CHANGE 4: specify a flock
class Flock { //is a Quacker
  constructor(){
    this._quackers = [];
  }
  
  add(quacker){
    this._quackers.push(quacker);
  }
  
  quack() { //there's that quack method!
    this._quackers.forEach(function(quacker){
      quacker.quack();
    });
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
module.exports.CountingDuckFactory = CountingDuckFactory;
module.exports.Flock = Flock;