const events = require('events');
//Task 2
function Countdown(numOfSec){
    this.
}

const Countdown = require('./countdown').Countdown;

  const countdown = new Countdown(10);

  countdown.on('secondElapsed', function(timeLeft) {
      if (timeLeft > 0) {
          console.log(timeLeft);
      } else {
          console.log('lift off!');
      }
  });

class Countdown extends events.EventEmitter {
    constructor(number) {
        super(); // calling constructor of events.EventEmitter
        
    }
    
}

module.exports = Countdown;
