<template>
  <div id="cellgrid" class="row justify-content-center">
      <cell :token="cells[0]" :key="0"
        @click.native='cellSelected(0)'
      ></cell>
      <cell :token="cells[1]" :key="1"
        @click.native='cellSelected(1)'
      ></cell>
      <cell :token="cells[2]" :key="2"
        @click.native='cellSelected(2)'
      ></cell>
      <div class="w-100"></div>
      <cell :token="cells[3]" :key="3"
        @click.native='cellSelected(3)'
      ></cell>
      <cell :token="cells[4]" :key="4"
        @click.native='cellSelected(4)'
      ></cell>
      <cell :token="cells[5]" :key="5"
        @click.native='cellSelected(5)'
      ></cell>
      <div class="w-100"></div>
      <cell :token="cells[6]" :key="6"
        @click.native='cellSelected(6)'
      ></cell>
      <cell :token="cells[7]" :key="7"
        @click.native='cellSelected(7)'
      ></cell>
      <cell :token="cells[8]" :key="8"
        @click.native='cellSelected(8)'
      ></cell>          
  </div>
</template>

<script>
// Is the container for rendering the cells.
// Doesn't actually contain them
import Cell from '@/components/Cell';

export default {
  props: ['cells'],
  components: {
    cell: Cell,
  },
  methods: {
    cellSelected(i) {
      this.$emit('cellSelected', i);
    },
  },
};
</script>

<style>
  
</style>


