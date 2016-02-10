'use strict';

var Ducks = require('./quackers.js');

//what we should do
function playSymphony(factory) { //now takes a factory!
  var redhead = factory.createRedheadDuck();
  var duckCall = factory.createDuckCall();
  var rubberDuck = factory.createRubberDuck();
  var goose = new Ducks.GooseAdapter(new Ducks.Goose());

  var flock = new Ducks.Flock(); //a flock of all the ducks
  flock.add(redhead); //add each individual duck
  flock.add(duckCall);
  flock.add(rubberDuck);
  flock.add(goose);
  
  var mallardFlock = new Ducks.Flock(); //a family of mallards
  mallardFlock.add(factory.createMallardDuck()); //add a family to this flock
  mallardFlock.add(factory.createMallardDuck());
  mallardFlock.add(factory.createMallardDuck());
  mallardFlock.add(factory.createMallardDuck());
  flock.add(mallardFlock); //put the family in the "all flock"

  console.log('"Rock Out Ducks!"');
  flock.quack();
  
  console.log('"Mallard Family Solo!"');
  mallardFlock.quack();

  console.log('Total quacks: '+Ducks.QuackCounter.quacks); //show count  
}

//run the simulation
var countingFactory = new Ducks.CountingDuckFactory(); //the kind of ducks we'll make
playSymphony(countingFactory);
