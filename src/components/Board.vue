<template>
  <div>
    <info></info>
    <cell-grid :cells="cells" @cellSelected='cellSelected'></cell-grid>
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
      // using this.cells[cell] = this.player
      // is not observable in JS.
      this.$set(this.cells, cell, this.player);
      this.swapPlayer();
    },
    swapPlayer() {
      if (this.player === 'X') {
        this.player = 'O';
      } else {
        this.player = 'X';
      }
    },
  },
};
</script>

<style>

</style>
