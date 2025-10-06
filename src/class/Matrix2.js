export default class Matrix2 {

  constructor(nbRows, nbCols) {
    this.nbRows = nbRows;
    this.nbCols = nbCols;

    this.data = new Array(nbRows);
    for (let i = 0; i < nbRows; i++) {
      this.data[i] = new Array(nbCols);
    }
    this.randomize(0);
  }

  randomize(prob = 0.5) {
    for (let row = 0; row < this.nbRows; row++) {
      for (let col = 0; col < this.nbCols; col++) {
        this.data[row][col] = Math.random() < prob ? 1 : 0;
      }
    }
  }

}
