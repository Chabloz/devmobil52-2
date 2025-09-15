import Circle from "./class/Circle";
import MainLoop from "mainloop.js";

const canvas = document.querySelector('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext('2d');

const circle = new Circle({
  position : { x: 100, y: 100 },
  radius: 100,
  color: 'red',
  velocity: { x: 0.1, y: 0.1 }
});

function tickDraw() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  circle.draw(ctx);
}

function tickUpdate(dt) {
  circle.move(dt);
}

MainLoop
  .setUpdate(tickUpdate)
  .setDraw(tickDraw)
  .start();