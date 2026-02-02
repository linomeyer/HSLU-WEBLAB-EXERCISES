let user = {
  doSth() {
    if (!this.isPausing) {
      console.log('I am doing sth.');
    }
  },
  pause() {
    this.isPausing = true;
  },
};
let admin = {
  name: 'Admin User',
  __proto__: user,
};
admin.pause();
console.log(admin.isPausing); //? Wieso
console.log(user.isPausing); // this.isPausing wurde nie erstellt
