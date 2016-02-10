'use strict';

var Ducks = require('./quackers.js');

//what we should do
function playSymphony(factory) { //now takes a factory!
  var redhead = factory.createRedheadDuck();
  var duckCall = factory.createDuckCall();
  var rubberDuck = factory.createRubberDuck();
  var goose = new Ducks.GooseAdapter(new Ducks.Goose());

  var flock = new Ducks.Flock(); //a flock of all the ducks
  flock.add(redhead); 
  flock.add(duckCall);
  flock.add(rubberDuck);
  flock.add(goose);
  
  var mallardFlock = new Ducks.Flock(); //a family of mallards
  mallardFlock.add(factory.createMallardDuck()); 
  mallardFlock.add(factory.createMallardDuck());
  mallardFlock.add(factory.createMallardDuck());
  mallardFlock.add(factory.createMallardDuck());
  flock.add(mallardFlock);

  var fan = new Ducks.DuckFan(); //create the fan
  rubberDuck.registerObserver(fan); //listen to the idol

  var mallardFan = new Ducks.DuckFan();
  mallardFlock.registerObserver(mallardFan);

  console.log('"Rock Out Ducks!"');
  flock.quack();
  
  console.log('"Mallard Family Solo!"');
  mallardFlock.quack();


  console.log('Total quacks: '+Ducks.QuackCounter.quacks); //show count  
}

//run the simulation
var countingFactory = new Ducks.CountingDuckFactory(); //the kind of ducks we'll make
playSymphony(countingFactory);
