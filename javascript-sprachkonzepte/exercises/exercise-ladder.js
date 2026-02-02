import { strict as assert } from 'assert';

function Ladder() {
  this.step = 0;

  this.up = () => {
    this.step++;
    return this;
  };

  this.down = () => {
    this.step--;
    return this;
  };

  this.currentStep = () => {
    return this.step;
  };
}

let ladder = new Ladder();
ladder.up();
assert.equal(ladder.currentStep(), 1, 'should go one step up');

console.log('current step: %s', ladder.step);

ladder.down();
assert.equal(ladder.currentStep(), 0, 'should go one step down');

assert.equal(
  new Ladder().up().up().up().down().currentStep(),
  2,
  'should go three steps up and one step down (in a chain)',
);
