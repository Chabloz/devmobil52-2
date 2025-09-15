export default class Vector2 {

  constructor({x, y}) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.hypot(this.x, this.y);
  }

  setAngle(angle) {
    const length = this.length;
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  static fromAngle(angle, length = 1) {
    return new Vector2({
      x: Math.cos(angle) * length,
      y: Math.sin(angle) * length
    });
  }

}