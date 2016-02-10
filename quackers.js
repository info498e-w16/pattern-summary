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

//CHANGE 1: add an adapter
class GooseAdapter { //is a Quacker
  constructor(goose){
    this._goose = goose;
  }
  
  quack() {
    this._goose.honk();
  }
}


//export all the classes
module.exports.MallardDuck = MallardDuck;
module.exports.RedheadDuck = ReadheadDuck;
module.exports.DuckCall = DuckCall;
module.exports.RubberDuck = RubberDuck;
module.exports.Goose = Goose;
module.exports.GooseAdapter = GooseAdapter;