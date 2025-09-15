import Circle from "./class/Circle";
import MainLoop from "mainloop.js";
import Vector2 from "./class/Vector2";
import { TAU, getRandomInt } from "./utils/math.js";
import Keyboard from "./class/Keyboard.js";

const keyboard = new Keyboard();


const canvas = document.querySelector('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext('2d');

const radius = 10;
const circle = new Circle({
  position : new Vector2({
    x: getRandomInt(radius, canvas.width - radius),
    y: getRandomInt(radius, canvas.height - radius)
  }),
  radius,
  color: 'red',
  velocity: Vector2.fromAngle(TAU * 0/8, 0.05)
});

function tickDraw() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  circle.draw(ctx);
}

function tickUpdate(dt) {
  if (keyboard.isKeyPressed('KeyY')) {
    circle.update(dt);
  }
}

MainLoop
  .setUpdate(tickUpdate)
  .setDraw(tickDraw)
  .start();