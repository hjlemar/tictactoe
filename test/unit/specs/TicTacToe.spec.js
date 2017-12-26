import TicTacToe from '@/lib/TicTacToe';

describe('TicTacToe ', () => {
  const makeArray = (cells) => {
    const array = Array.from({ length: 9 });
    cells.forEach((i) => { array[i] = 'X'; });
    return array;
  };

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
        const cells = makeArray(win);
        const ttt = new TicTacToe({ cells });
        expect(ttt.gameWon()).toBeTruthy();
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

    notWins.forEach((cells) => {
      it(`game not won when ${cells}`, () => {
        const ttt = new TicTacToe({ cells });
        expect(ttt.gameWon()).toBeFalsy();
      });
    });
  });

  describe('status', () => {
    it('initial is player X turn', () => {
      const ttt = new TicTacToe();
      expect(ttt.status()).toBe('It is X turn');
    });
    it('after swapPlayer is player O turn', () => {
      const ttt = new TicTacToe();
      ttt.swapPlayer();
      expect(ttt.status()).toBe('It is O turn');
    });
    it('game won by X', () => {
      const ttt = new TicTacToe({ cells: makeArray([0, 1, 2]) });
      expect(ttt.status()).toBe('Game won by X');
    });
    it('game is tied', () => {
        const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const ttt = new TicTacToe({ cells });
        expect(ttt.status()).toBe('The game is tied.');   
    });
  });

  describe('check', () => {
    it('false with undefined values', () => {
      const ttt1 = new TicTacToe();
      expect(ttt1.check(0, 1, 2)).toBeFalsy();
      const ttt2 = new TicTacToe({ cells: makeArray([0, 1]) });
      expect(ttt2.check(0, 1, 2)).toBeFalsy();
    });
  });

  describe('gameTied', () => {
    it('has a tie', () => {
      const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const ttt = new TicTacToe({ cells });
      expect(ttt.gameTied()).toBeTruthy();
    });

    it('does not have a tie', () => {
        // last row is true
      const cells = [1, 2, 3, 4, 5, 6, 8, 8, 8];
      const ttt = new TicTacToe({ cells });
      expect(ttt.gameTied()).toBeFalsy();
    });
  });


  describe('when game not won ', () => {
    it('start with player "X" and has 9 cells', () => {
      const ttt = new TicTacToe();
      expect(ttt.player).toBe('X');
      expect(ttt.cells).toBeDefined();
      expect(ttt.cells.length).toBe(9);
    });

    it('player should be X -> O -> X after 2 swaps', () => {
      const ttt = new TicTacToe();
      expect(ttt.player).toBe('X');
      ttt.swapPlayer();
      expect(ttt.player).toBe('O');
      ttt.swapPlayer();
      expect(ttt.player).toBe('X');
    });

    it('player X selects cell 0 to be X', () => {
      const ttt = new TicTacToe();
      ttt.markCell(0);
      expect(ttt.cells[0]).toBe('X');
      ttt.swapPlayer();
      expect(ttt.player).toBe('O');


      const board = Array.from({ length: 9 });
      board[0] = 'X';
      expect(ttt.cells).toEqual(board);
    });

    it('player cannot change cell after selection', () => {
      const ttt = new TicTacToe();
      ttt.markCell(0);
      expect(ttt.cells[0]).toBe('X');
      ttt.swapPlayer();
      expect(ttt.player).toBe('O');
      ttt.markCell(0);
      expect(ttt.cells[0]).toBe('X');
    });
  });

  describe('when game won', () => {
    it('player does not change', () => {
      const ttt = new TicTacToe();
      expect(ttt.player).toBe('X');
      ttt.cells = makeArray([0, 1, 2]);
      ttt.swapPlayer();
      expect(ttt.player).toBe('X');
    });

    it('cell does not change', () => {
      const ttt = new TicTacToe();
      expect(ttt.player).toBe('X');
      ttt.cells = makeArray([0, 1, 2]);
      expect(ttt.cells[3]).not.toBeDefined();
      ttt.markCell(3);
      expect(ttt.cells[3]).not.toBeDefined();
    });
  });

  describe('when game is advanced', () => {
    it('advance game once on cell 0', () => {
        const ttt = new TicTacToe();
        ttt.advanceGame(0);
        expect(ttt.player).toBe('O');
        expect(ttt.cells[0]).toBe('X');

    });

    it('advance game twice on cell 0', () => {
        const ttt = new TicTacToe();
        ttt.advanceGame(0);
        ttt.advanceGame(0);
        expect(ttt.player).toBe('O');
        expect(ttt.cells[0]).toBe('X');
    });

    it('advance game twice on cell 0,3', () => {
        const ttt = new TicTacToe();
        ttt.advanceGame(0);
        expect(ttt.player).toBe('O');
        expect(ttt.cells[0]).toBe('X');
        ttt.advanceGame(3);
        expect(ttt.player).toBe('X');
        expect(ttt.cells[3]).toBe('O');
    });
  });
});
