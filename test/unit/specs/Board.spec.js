import Vue from 'vue';
import Board from '@/components/Board';
import { mount } from 'vue-test-utils';

describe('CellGrid.vue', () => {
  let Constructor;
  beforeEach(() => {
    Constructor = Vue.extend(Board);
  });

  it('start with player "X" and has 9 cells', () => {
    const vm = new Constructor().$mount();
    expect(vm.player).toBe('X');
    expect(vm.cells).toBeDefined();
    expect(vm.cells.length).toBe(9);
  });

  it('player should be X -> O -> X after 2 swaps', () => {
    const vm = new Constructor().$mount();
    expect(vm.player).toBe('X');
    vm.swapPlayer();
    expect(vm.player).toBe('O');
    vm.swapPlayer();
    expect(vm.player).toBe('X');
  });

  it('player X selects cell 0 to be X', () => {
    const vm = new Constructor().$mount();
    vm.cellSelected(0);
    expect(vm.player).toBe('O');
    expect(vm.cells[0]).toBe('X');

    const board = Array.from({ length: 9});
    board[0] = 'X';
    expect(vm.cells).toEqual(board);

  });
});