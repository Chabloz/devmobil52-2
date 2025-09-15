import Vector2 from './Vector2.js';

export default class Circle {

  constructor({radius, position, color, velocity}) {
    if (!position instanceof Vector2) throw new TypeError('position must be a Vector2');
    if (!velocity instanceof Vector2) throw new TypeError('velocity must be a Vector2');

    this.radius = radius;
    this.position = position;
    this.color = color;
    this.velocity = velocity;
  }

  update(dt) {
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }

}