const board = document.querySelector('#board');
const cells = board.querySelectorAll('.cell');
const turnDisplay = document.querySelector("#turn");
const resetButton = document.querySelector("reset");

let redTurn = true;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    let column = i % 7;
    let row = 5;
    while (row >= 0) {
      if (!cells[column + row * 7].classList.contains("filled")) {
        break;
      }
      row--;
    }
    if (row < 0) {
      return;
    }
    cells[column + row * 7].classList.add("filled");
    if (redTurn) {
      cells[column + row * 7].classList.add("red");
      turnDisplay.innerHTML = "Yellow's Turn";
    } else {
      cells[column + row * 7].classList.add("yellow");
      turnDisplay.innerHTML = "Red's Turn";
    }
    redTurn = !redTurn;
  });
}

// TODO
//
// function checkForWinner(row, column) {
//   let cellColor = "red";
  
//   if (cells[column + row * 7].classList.contains("yellow")) {
//     cellColor = "yellow";
//   }
  
//   if (checkHorizontally(column + row * 7, cellColor) || checkVertically(column + row * 7, cellColor) || checkDiagonally(column + row * 7, cellColor)) {
//     return true;
//   }
//   return false;
// }

// function checkHorizontally(cellNum, cellColor) {
//   for (let i = 0; i < 7; i++) {
    
//   }
// }

// function checkVertically(cellNum, cellColor) {
  
// }

// function checkDiagonally(cellNum, cellColor) {
  
// }

resetButton.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("filled");
  }
  redTurn = true;
  turnDisplay.innerHTML = "Red's Turn";
});