'use strict';

var Ducks = require('./quackers.js');

//what we should do
function playSymphony(factory) { //now takes a factory!
  var mallard = factory.createMallardDuck();
  var redhead = factory.createRedheadDuck();
  var duckCall = factory.createDuckCall();
  var rubberDuck = factory.createRubberDuck();
  var goose = new Ducks.GooseAdapter(new Ducks.Goose());


  console.log('"Rock Out Ducks!"');
  mallard.quack();
  redhead.quack();
  duckCall.quack();
  rubberDuck.quack();
  goose.quack(); //goose can now quack!

  console.log('Total quacks: '+Ducks.QuackCounter.quacks); //show count  
}

//run the simulation
var countingFactory = new Ducks.CountingDuckFactory(); //the kind of ducks we'll make
playSymphony(countingFactory);
