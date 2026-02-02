const name = 'Patrick';
console.log(`hello ${1}`); //  1
console.log(`hello ${'name'}`); //  name
console.log(`hello ${name}`); // Patrick

// Funktioniert das? Warum?
// Ja -
const user = { name: 'John' };
user.name = 'Peter';
console.log(user.name);
