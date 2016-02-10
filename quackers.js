'use strict';

//CHANGE 5: add observers
class Duck { //is an Observable
  constructor() {
    this._observers = new QuackObservers(this); //object to track observers
  }
  
  registerObserver(observer){
    this._observers.registerObserver(observer); //delegate
  }
  
  notifyAll(){
    this._observers.notifyAll(); //delegate
  }
}


/**
Quacker Interface:
  quack() //has the quacker quack!
**/

class MallardDuck extends Duck { //is a Quacker
  quack() {
    console.log('quack!');
    this.notifyAll();
  }
}

class RedheadDuck extends Duck { //is a Quacker
  quack() {
    console.log('quack');
    this.notifyAll();
  }
}

class DuckCall extends Duck { //is a Quacker
  quack() {
    console.log('Kwak');
    this.notifyAll();
  }
  
}

class RubberDuck extends Duck { //is a Quacker
  quack() {
    console.log('Sqeak');
    this.notifyAll();
  }
}

class Goose { //NOT a Quacker
  honk() {
    console.log('HOOONK');
  }
}

class GooseAdapter extends Duck { //is a Quacker
  constructor(goose){
    super();
    this._goose = goose;
  }
  
  quack() {
    this._goose.honk();
    this.notifyAll();
  }
}

var numberQuacks = 0; //"static" variable, private to module

class QuackCounter { //is a Quacker AND an Observable
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

 registerObserver(observer){
    this._quacker.registerObserver(observer); //delegate
  }
  
  notifyAll(){
    this._quacker.notifyAll(); //delegate
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

class Flock extends Duck { //is a Quacker
  constructor(){
    super();
    this._quackers = [];
  }
  
  add(quacker){
    this._quackers.push(quacker);
  }
  
  quack() { //there's that quack method!
    this._quackers.forEach(function(quacker){
      quacker.quack();
    });
    this.notifyAll();
  }
}

//CHANGE 5: add observers
/**
Observable Interface:
  registerObserver(observer)
  notifyAll()
**/

//an object to keep track of te observers
class QuackObservers { //is an Observable
  constructor(observed) {
    this._observers = [];
    this._duck = observed; //who we're watching
  }  
  
  registerObserver(observer){
    this._observers.push(observer);
  }
  
  notifyAll() { //let everyone know!
    // console.log(this);
    // console.log('notifying '+this._observers.length);
    this._observers.forEach(function(observer){
      observer.update(this._duck);
    }, this);
  }
}

//see Duck class above

/**
Observer Interface:
  update(duck)
**/

class DuckFan { //is an Observer
  update(duck){
    console.log('A fan just heard their idol. SQUEEEEEEEE!!!');
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
module.exports.DuckFan = DuckFan;