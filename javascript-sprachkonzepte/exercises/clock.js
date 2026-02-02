class Clock {
  #delay;

  constructor(delay) {
    this.#delay = delay;
  }

  start() {
    setInterval(() => this.#currentTime(), this.#delay);
  }

  #currentTime() {
    console.log(new Date(Date.now()).toLocaleString().split(', ')[1]);
  }
}

new Clock(2000).start();
