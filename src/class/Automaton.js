import Matrix2 from "./Matrix2";

export default class Automaton {

  constructor(rows, cols) {
    this.matrix = new Matrix2(rows, cols);
  }

  draw(ctx, cellSize = 10) {
    ctx.save();
    for (let row = 0; row < this.matrix.nbRows; row++) {
      for (let col = 0; col < this.matrix.nbCols; col++) {
        const cell = this.matrix.data[row][col];
        ctx.fillStyle = cell ? 'white' : 'black';
        ctx.fillRect(col * cellSize+1, row * cellSize+1, cellSize-1, cellSize-1);
      }
    }
    ctx.restore();
  }

}