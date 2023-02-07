const board = document.getElementById("board");
const cells = board.getElementsByTagName("td");
const turnDisplay = document.getElementById("turn");
const resetButton = document.getElementById("reset");

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

resetButton.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].className = "";
  }
  redTurn = true;
  turnDisplay.innerHTML = "Red's Turn";
});
