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

  test('should correctly create column1 from the arrays in the rows', ()=> {
    expect(sudoku.column1).toEqual([row1[0], row2[0], row3[0], row4[0], row5[0], row6[0], row7[0], row8[0], row9[0]]);
  });

  test('should correctly create 9 columns from the arrays in the 9 rows', ()=> {
    expect(sudoku.column1).toEqual([row1[0], row2[0], row3[0], row4[0], row5[0], row6[0], row7[0], row8[0], row9[0]]);
    expect(sudoku.column2).toEqual([row1[1],row2[1],row3[1],row4[1],row5[1],row6[1],row7[1],row8[1],row9[1]]);
    expect(sudoku.column3).toEqual([row1[2],row2[2],row3[2],row4[2],row5[2],row6[2],row7[2],row8[2],row9[2]]);
    expect(sudoku.column4).toEqual([row1[3],row2[3],row3[3],row4[3],row5[3],row6[3],row7[3],row8[3],row9[3]]);
    expect(sudoku.column5).toEqual([row1[4],row2[4],row3[4],row4[4],row5[4],row6[4],row7[4],row8[4],row9[4]]);
    expect(sudoku.column6).toEqual([row1[5],row2[5],row3[5],row4[5],row5[5],row6[5],row7[5],row8[5],row9[5]]);
    expect(sudoku.column7).toEqual([row1[6],row2[6],row3[6],row4[6],row5[6],row6[6],row7[6],row8[6],row9[6]]);
    expect(sudoku.column8).toEqual([row1[7],row2[7],row3[7],row4[7],row5[7],row6[7],row7[7],row8[7],row9[7]]);
    expect(sudoku.column9).toEqual([row1[8],row2[8],row3[8],row4[8],row5[8],row6[8],row7[8],row8[8],row9[8]]);
  });

  test('should check if an array has no repeated numbers', ()=> {
    expect(sudoku.checkRepeat(row2)).toEqual("there are no repeating numbers");
  });

  test('should check if an array has repeated numbers', ()=> {
    expect(sudoku.checkRepeat([1, 2, 3, 3, 4, 5, 6, 7, 8])).toEqual("there are repeating numbers");
  });
});

