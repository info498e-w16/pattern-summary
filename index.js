'use strict';

var Ducks = require('./quackers.js');

//run the duck simulation
var mallard = new Ducks.MallardDuck();
var redhead = new Ducks.RedheadDuck();
var duckCall = new Ducks.DuckCall();
var rubberDuck = new Ducks.RubberDuck();



console.log('"Rock Out Ducks!"');
mallard.quack();
redhead.quack();
duckCall.quack();
rubberDuck.quack();