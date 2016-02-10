'use strict';

var Ducks = require('./quackers.js');

//what we should do
function playSymphony() {
  var mallard = new Ducks.QuackCounter(new Ducks.MallardDuck()); //decorate with counter
  var redhead = new Ducks.QuackCounter(new Ducks.RedheadDuck());
  var duckCall = new Ducks.QuackCounter(new Ducks.DuckCall());
  var rubberDuck = new Ducks.QuackCounter(new Ducks.RubberDuck());
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
playSymphony();