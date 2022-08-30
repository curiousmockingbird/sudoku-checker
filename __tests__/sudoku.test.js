import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {
  let sudoku;
  const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const row2 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
  const row3 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
  const row4 = [3, 1, 2, 8, 4, 5, 9, 6, 7];
  const row5 = [6, 9, 7, 3, 1, 2, 8, 4, 5];
  const row6 = [8, 4, 5, 6, 9, 7, 3, 1, 2];
  const row7 = [2, 3, 1, 5, 7, 4, 6, 9, 8];
  const row8 = [9, 6, 8, 2, 3, 1, 5, 7, 4];
  const row9 = [5, 7, 4, 9, 6, 8, 2, 3, 1];

  beforeEach(() => {
    sudoku = new Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9);
  });

  test('should correctly create an object with 9 rows', () => {
    expect(sudoku.row1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sudoku.row2).toEqual([7, 8, 9, 1, 2, 3, 4, 5, 6]);
    expect(sudoku.row3).toEqual([4, 5, 6, 7, 8, 9, 1, 2, 3]);
    expect(sudoku.row4).toEqual([3, 1, 2, 8, 4, 5, 9, 6, 7]);
    expect(sudoku.row5).toEqual([6, 9, 7, 3, 1, 2, 8, 4, 5]);
    expect(sudoku.row6).toEqual([8, 4, 5, 6, 9, 7, 3, 1, 2]);
    expect(sudoku.row7).toEqual([2, 3, 1, 5, 7, 4, 6, 9, 8]);
    expect(sudoku.row8).toEqual([9, 6, 8, 2, 3, 1, 5, 7, 4]);
    expect(sudoku.row9).toEqual([5, 7, 4, 9, 6, 8, 2, 3, 1]);
  });

  test('should correctly create columns from the arrays in the rows', ()=>{
    expect(sudoku.column1).toEqual([row1[0],row2[0],row3[0],row4[0],row5[0],row6[0],row7[0],row8[0],row9[0]]);
  });

});

