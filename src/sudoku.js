export default function Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
  this.row4 = row4;
  this.row5 = row5;
  this.row6 = row6;
  this.row7 = row7;
  this.row8 = row8;
  this.row9 = row9;
  this.column1 = [row1[0],row2[0],row3[0],row4[0],row5[0],row6[0],row7[0],row8[0],row9[0]];
  this.column2 = [row1[1],row2[1],row3[1],row4[1],row5[1],row6[1],row7[1],row8[1],row9[1]];
  this.column3 = [row1[2],row2[2],row3[2],row4[2],row5[2],row6[2],row7[2],row8[2],row9[2]];
  this.column4 = [row1[3],row2[3],row3[3],row4[3],row5[3],row6[3],row7[3],row8[3],row9[3]];
  this.column5 = [row1[4],row2[4],row3[4],row4[4],row5[4],row6[4],row7[4],row8[4],row9[4]];
  this.column6 = [row1[5],row2[5],row3[5],row4[5],row5[5],row6[5],row7[5],row8[5],row9[5]];
  this.column7 = [row1[6],row2[6],row3[6],row4[6],row5[6],row6[6],row7[6],row8[6],row9[6]];
  this.column8 = [row1[7],row2[7],row3[7],row4[7],row5[7],row6[7],row7[7],row8[7],row9[7]];
  this.column9 = [row1[8],row2[8],row3[8],row4[8],row5[8],row6[8],row7[8],row8[8],row9[8]];
}

Sudoku.prototype.checkRepeat = function(row1) {

    return "there are no repeating numbers";
  
}