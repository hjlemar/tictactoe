export default class {

  constructor(state = {}) {
    const { player = 'X', cells = Array.from({ length: 9 }) } = state;
    this.player = player;
    this.cells = cells;
  }

  advanceGame(cell) {
    if (this.markCell(cell)) {
      this.swapPlayer();
    }
  }

  markCell(cell) {
    if (this.cells[cell] === undefined && !this.gameOver()) {
      const next = this.cells.slice();
      next[cell] = this.player;
      this.cells = next;
      return true;
    }
    return false;
  }

  gameTied() {
    return this.cells.every(v => v !== undefined)
      && !this.gameWon();
  }

  swapPlayer() {
    if (this.gameWon() || this.gameTied()) {
      return;
    }
    if (this.player === 'X') {
      this.player = 'O';
    } else {
      this.player = 'X';
    }
  }

  status() {
    if (this.gameWon()) {
      return `Game won by ${this.player}`;
    } else if (this.gameTied()) {
      return 'The game is tied.';
    }
    return `It is ${this.player} turn`;
  }

  gameWon() {
    const check = this.check.bind(this);
    // horizontal rows
    return check(0, 1, 2)
      || check(3, 4, 5)
      || check(6, 7, 8)
      // vertical rows
      || check(0, 3, 6)
      || check(1, 4, 7)
      || check(2, 5, 8)
      // diagnol starting from upper left
      || check(0, 4, 8)
      // diagnol starting from lower left
      || check(2, 4, 6);
  }

  gameOver() {
    return this.gameWon() || this.gameTied();
  }

  check(a, b, c) {
    return this.cells[a] !== undefined
      && this.cells[a] === this.cells[b]
      && this.cells[b] === this.cells[c];
  }
}
