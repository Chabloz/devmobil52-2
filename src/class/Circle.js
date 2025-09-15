export default class Circle {

  // radius, position, color, velocity (Vector2)
  constructor({radius, position, color, velocity}) {
    this.radius = radius;
    this.position = position;
    this.color = color;
    this.velocity = velocity;
  }

  move(dt) {
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