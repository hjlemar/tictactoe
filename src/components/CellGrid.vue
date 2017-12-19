<template>
  <div id="cellgrid" class="form row">
      <cell class="col-sm-3"
        v-for="(c,i) in cells" :token="cells[i]" v-bind:key="i"
        @click.native='cellSelected(i)'
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
  #cellgrid {
    width: 350px;
  }
  
</style>


