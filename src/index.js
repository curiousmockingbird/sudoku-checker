import Sudoku from './sudoku.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// UI Logic
function handleSubmission(event) {
event.preventDefault();

const row1 = document.querySelectorAll("input[name='row-1']").value; 
const row2 = document.querySelectorAll("input[name='row-2']").value; 
const row3 = document.querySelectorAll("input[name='row-3']").value; 
const row4 = document.querySelectorAll("input[name='row-4']").value; 
const row5 = document.querySelectorAll("input[name='row-5']").value; 
const row6 = document.querySelectorAll("input[name='row-6']").value; 
const row7 = document.querySelectorAll("input[name='row-7']").value; 
const row8 = document.querySelectorAll("input[name='row-8']").value; 
const row9 = document.querySelectorAll("input[name='row-9']").value; 

let sudoku = new Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9);
// sudoku.checkRepeat(toCheck);

}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmission);