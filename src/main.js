import Circle from "./class/Circle";

const canvas = document.querySelector('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext('2d');

const circle = new Circle({
  position : {
    x: 100,
    y: 100
  },
  radius: 100,
  color: 'red',
  velocity: {
    x: 1,
    y: 0,
  }
});

function tick(dt) {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  circle.move(dt);
  circle.draw(ctx);
}

MainLoop.setDraw(tick).start();