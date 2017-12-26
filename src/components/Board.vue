<template>
  <div id="board">
    <div class="row justify-content-center">
      <info :status="ticTacToe.status()"></info>
    </div>
    <cell-grid :cells="ticTacToe.cells" @cellSelected='cellSelected'></cell-grid>
    <div class="row justify-content-center" v-if="ticTacToe.gameOver()">
      <button class="btn btn-primary" @click="reset">New Game</button>
    </div>
  </div>
</template>

<script>
import TicTacToe from '@/lib/TicTacToe';
import CellGrid from './CellGrid';
import Info from './Info';


export default {
  components: {
    'cell-grid': CellGrid,
    info: Info,
  },
  data() {
    return {
      ticTacToe: new TicTacToe(),
    };
  },
  methods: {
    cellSelected(cell) {
      // using this.cells[cell] = this.player
      // is not observable in JS.
      this.ticTacToe.advanceGame(cell);
    },
    reset() {
      this.ticTacToe = new TicTacToe();
    },
  },
};
</script>
  
<style>

</style>
