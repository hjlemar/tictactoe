import Vue from 'vue';
import Board from '@/components/Board';

describe('CellGrid.vue', () => {
  let Constructor;

  const makeArray = (cells) => {
    const array = Array.from({ length: 9 });
    cells.forEach((i) => { array[i] = 'X'; });
    return array;
  };

  beforeEach(() => {
    Constructor = Vue.extend(Board);
  });

  describe('check utility functions', () => {
    describe('game states', () => {
      const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      wins.forEach((win) => {
        it(`game won when ${win}`, () => {
          const vm = new Constructor().$mount();
          expect(vm.gameWon()).toBeFalsy();
          vm.cells = makeArray(win);
          expect(vm.gameWon()).toBeTruthy();
        });
      });

      const notWins = [
        // 2 horizontal
        [0, 1, 3],
        // 2 vertcal
        [0, 3, 7],
        // 2 UL diagnol
        [0, 4, 5],
        // 2 LL diagnol
        [2, 4, 1],
      ];

      notWins.forEach((notWin) => {
        it(`game not won when ${notWin}`, () => {
          const vm = new Constructor().$mount();
          expect(vm.gameWon()).toBeFalsy();
          vm.cells = makeArray(notWin);
          expect(vm.gameWon()).toBeFalsy();
        });
      });
    });

    describe('status', () => {
      it('initial is player X turn', () => {
        const vm = new Constructor().$mount();
        expect(vm.status()).toBe('It is X turn');
      });
      it('after swapPlayer is player O turn', () => {
        const vm = new Constructor().$mount();
        vm.swapPlayer();
        expect(vm.status()).toBe('It is O turn');
      });
      it('game won by X', () => {
        const vm = new Constructor().$mount();
        vm.cells = makeArray([0, 1, 2]);
        expect(vm.status()).toBe('Game won by X');
      });
    });

    describe('check', () => {
      it('false with undefined values', () => {
        const vm = new Constructor().$mount();
        vm.cells = makeArray([]);
        expect(vm.check(0, 1, 2)).toBeFalsy();
        vm.cells = makeArray([0, 1]);
        expect(vm.check(0, 1, 2)).toBeFalsy();
      });
    });
  });

  describe('when game not won ', () => {
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

      const board = Array.from({ length: 9 });
      board[0] = 'X';
      expect(vm.cells).toEqual(board);
    });

    it('player cannot change cell after selection', () => {
      const vm = new Constructor().$mount();
      vm.cellSelected(0);
      expect(vm.cells[0]).toBe('X');
      expect(vm.player).toBe('O');
      vm.cellSelected(0);
      expect(vm.cells[0]).toBe('X');
    });
  });

  describe('when game won', () => {
    it('player does not change', () => {
      const vm = new Constructor().$mount();
      expect(vm.player).toBe('X');
      vm.cells = makeArray([0, 1, 2]);
      vm.swapPlayer();
      expect(vm.player).toBe('X');
    });

    it('cell does not change', () => {
      const vm = new Constructor().$mount();
      expect(vm.player).toBe('X');
      vm.cells = makeArray([0, 1, 2]);
      expect(vm.cells[3]).not.toBeDefined();
      vm.cellSelected(3);
      expect(vm.cells[3]).not.toBeDefined();
    });
  });
});
