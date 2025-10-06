import Circle from "./class/Circle";
import MainLoop from "mainloop.js";
import Vector2 from "./class/Vector2";
import { TAU, getRandomInt } from "./utils/math.js";
import Keyboard from "./class/Keyboard.js";
import Tweens, {easings} from "./class/Tweens.js";

const keyboard = new Keyboard();


const canvas = document.querySelector('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext('2d');

const radius = 10;
const gap = 10;
const circles = [];
const tweens = new Tweens();
let indCircle = 0;
for (const easeFct of easings) {
  indCircle++;
  const circle = new Circle({
    position : new Vector2({x: radius + gap + 100, y: (radius + gap) * indCircle}),
    radius,
    color: 'red',
    velocity: Vector2.fromAngle(TAU * 0/8, 0.1)
  });
  tweens.create({
    from: 20,
    to: 400,
    dur: 3000,
    ease: easeFct,
    loop: true,
    yoyo: true,
    animate: (x) => {
      circle.position.x = x;
    }
  });
  tweens.create({
    from: 0,
    to: 360,
    dur: 3000,
    loop: true,
    yoyo: true,
    ease: easeFct,
    animate: (hue) => {
      circle.color = `hsl(${hue}, 100%, 50%)`;
    }
  });
  circles.push(circle);
}

function tickDraw() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  circles.forEach(c => c.draw(ctx));
}

function tickUpdate(dt) {
  // circle.update(dt);
  tweens.update(dt);
}

MainLoop
  .setSimulationTimestep(60/1000)
  .setUpdate(tickUpdate)
  .setDraw(tickDraw)
  .start();