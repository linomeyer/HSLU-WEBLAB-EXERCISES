/* eslint-disable no-undef */

//

function delay(delay, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delay);
  });
}

delay(2000, 'hallo').then(console.log);
