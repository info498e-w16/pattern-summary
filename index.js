'use strict';

var Ducks = require('./quackers.js');

//what we should do
function playSymphony() {
  var mallard = new Ducks.MallardDuck();
  var redhead = new Ducks.RedheadDuck();
  var duckCall = new Ducks.DuckCall();
  var rubberDuck = new Ducks.RubberDuck();
  var goose = new Ducks.GooseAdapter(new Ducks.Goose()); //add the goose


  console.log('"Rock Out Ducks!"');
  mallard.quack();
  redhead.quack();
  duckCall.quack();
  rubberDuck.quack();
  goose.quack(); //goose can now quack!
}

//run the simulation
playSymphony();