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

class ReadheadDuck { //is a Quacker
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


//export all the classes
module.exports.MallardDuck = MallardDuck;
module.exports.RedheadDuck = ReadheadDuck;
module.exports.DuckCall = DuckCall;
module.exports.RubberDuck = RubberDuck;
module.exports.Goose = Goose;