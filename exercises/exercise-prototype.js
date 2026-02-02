const user = {
  doSth() {
    if (!this.isPausing) {
      console.log('I am doing sth.');
    }
  },
  pause() {
    this.isPausing = true;
  },
};
const admin = {
  name: 'Admin User',
  __proto__: user,
};
admin.pause();
console.log(admin.isPausing); // this.isPausing wird beim Aufruf von pause() erstellt für admin
console.log(user.isPausing); // this.isPausing existiert gar nicht auf user, da pause() nie aufgerufen wurde
