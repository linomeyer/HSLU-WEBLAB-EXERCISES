import { strict as assert } from 'assert';

// Vor dem Funktionsaufruf
const menu = { width: 200, height: 300, title: 'Titel' };

// Erster Lauf
multiProperties(menu);

// Überprüfung erster Aufruf
assert.deepEqual(menu, {
  width: 400,
  height: 600,
  title: 'Titel',
});

// Neues Property hinzugefügt
menu.newProperty = 10;

// Neues Property hinzugefügt
menu.justAnotherProperty = 'Hallo';

// Zweiter Aufruf
multiProperties(menu);

// Überprüfung zweiter Aufruf
assert.deepEqual(menu, {
  width: 800,
  height: 1200,
  title: 'Titel',
  newProperty: 20,
  justAnotherProperty: 'Hallo',
});

/**
 * Multipliziert alle number properties von einem object mit 2
 * Nach dem 1. Funktionsaufruf
 * menu = { width: 400, height: 600, title: "Titel" };
 * Nach dem 2. Funktionsaufruf
 * menu = { width: 800, height: 1200, newProperty = 20, title: "Titel", justAnotherProperty: "Hallo" };
 * @param {*} menu
 * @returns
 */
// eslint-disable-next-line no-unused-vars, no-shadow
function multiProperties(menu) {
  for (let property in menu) {
    if (typeof menu[property] === 'number') {
      menu[property] *= 2;
    }
  }
}
