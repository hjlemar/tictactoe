<template>
  <div id="board">
    <div class="row justify-content-center">
      <info :status="status()"></info>
    </div>
    <cell-grid :cells="cells" @cellSelected='cellSelected'></cell-grid>
    <div class="row justify-content-center" v-if="gameWon() || gameTied()">
      <button class="btn btn-primary" @click="reset">New Game</button>
    </div>
  </div>
</template>

<script>
import CellGrid from './CellGrid';
import Info from './Info';

export default {
  components: {
    'cell-grid': CellGrid,
    info: Info,
  },
  data() {
    return {
      cells: Array.from({ length: 9 }),
      player: 'X',
    };
  },
  methods: {
    cellSelected(cell) {
      if (this.gameWon() || this.gameTied()) {
        return;
      }
      // using this.cells[cell] = this.player
      // is not observable in JS.
      if (this.cells[cell] === undefined) {
        this.$set(this.cells, cell, this.player);
        this.swapPlayer();
      }
    },
    swapPlayer() {
      if (this.gameWon() || this.gameTied()) {
        return;
      }
      if (this.player === 'X') {
        this.player = 'O';
      } else {
        this.player = 'X';
      }
    },
    status() {
      if (this.gameWon()) {
        return `Game won by ${this.player}`;
      } else if (this.gameTied()) {
        return 'The game is tied.';
      }
      return `It is ${this.player} turn`;
    },
    gameWon() {
      const check = this.check;
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
    },
    check(a, b, c) {
      return this.cells[a] !== undefined
        && this.cells[a] === this.cells[b]
        && this.cells[b] === this.cells[c];
    },
    reset() {
      this.player = 'X';
      this.cells = Array.from({ length: 9 });
    },
    gameTied() {
      return this.cells.every(v => v !== undefined)
        && !this.gameWon();
    },
  },
};
</script>
  
<style>

</style>
