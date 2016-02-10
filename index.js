'use strict';

var Ducks = require('./quackers.js');

//what we should do
function playSymphony() {
  var mallard = new Ducks.MallardDuck();
  var redhead = new Ducks.RedheadDuck();
  var duckCall = new Ducks.DuckCall();
  var rubberDuck = new Ducks.RubberDuck();


  console.log('"Rock Out Ducks!"');
  mallard.quack();
  redhead.quack();
  duckCall.quack();
  rubberDuck.quack();
}

//run the simulation
playSymphony();