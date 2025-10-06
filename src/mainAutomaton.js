import Automaton from "./class/Automaton.js";
import MainLoop from "mainloop.js";
import { TAU, getRandomInt } from "./utils/math.js";

const canvas = document.querySelector('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext('2d');

const cellSize = 10;
const automaton = new Automaton( Math.floor(canvas.height / cellSize), Math.floor(canvas.width / cellSize) );
automaton.matrix.randomize(0.5);

function tickDraw() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  automaton.draw(ctx, cellSize);
}

function tickUpdate(dt) {

}

console.log(automaton);

MainLoop
  .setSimulationTimestep(1000 / 1)
  .setUpdate(tickUpdate)
  .setDraw(tickDraw)
  .start();