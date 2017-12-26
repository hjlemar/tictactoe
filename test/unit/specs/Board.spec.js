import Vue from 'vue';
import Board from '@/components/Board';
import TicTacToe from '@/lib/TicTacToe';

describe('Board.vue', () => {
  let Constructor;

  beforeEach(() => {
    Constructor = Vue.extend(Board);
  });

  describe('reset', () => {
    it('the board has been reset', () => {
      const data = {
        ticTacToe: new TicTacToe({
          player: 'O',
          cells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }),
      };
      const vm = new Constructor({ data }).$mount();
      const old = vm.ticTacToe;
      vm.reset();
      expect(vm.ticTacToe).not.toBe(old);
    });
  });

  describe('cellSelected', () => {
    it('with cell 0', () => {
      const data = {
        ticTacToe: {
          advanceGame(cell) {
            expect(cell).toBe(0);
          },
          status() {

          },
          gameOver() {

          },
        },
      };
      const vm = new Constructor({ data }).$mount();
      vm.cellSelected(0);
    });
  });
});
