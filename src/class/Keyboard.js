export default class Keyboard {

  constructor() {
    this.keys = new Set();
    document.body.addEventListener('keypress', e => {
      this.keys.add(e.code);
      console.log(this.keys);
    });
    document.body.addEventListener('keyup', e => {
      this.keys.delete(e.code);
    });
  }

  isKeyPressed(keyCode) {
    return this.keys.has(keyCode);
  }
}