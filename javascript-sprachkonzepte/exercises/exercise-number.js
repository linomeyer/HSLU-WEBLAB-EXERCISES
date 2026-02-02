import { strict as assert } from 'assert';

function findNumber(a, b, c) {
  if (![a, b, c].every((x) => Number.isInteger(x))) {
    return null;
  }
  if ((a === b) === c) {
    return 'All numbers are equal';
  }
  if (a === b) {
    return c;
  }
  if (b === c) {
    return a;
  }
  if (a === c) {
    return b;
  }
  return 'Not any numbers are equal';
}

// Aufgabe 1
assert.equal(2, findNumber(1, 1, 2));
assert.equal(1, findNumber(1, 1, 1));
assert.equal('Not any numbers are equal', findNumber(1, 2, 3));
assert.equal(3, findNumber(2, 3, 2));

// Aufgabe 2
assert.equal(findNumber('2', '2', 1), null); // Strings als Parameter nicht erlaubt
assert.equal(findNumber(1.2, 1.2, 3), null);
