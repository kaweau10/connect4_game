const table = document.getElementById("board");
const cells = table.getElementsByTagName("td");
const prompt = document.getElementById("prompt");

let player = "red";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    handleClick(this, player);
  });
}

function handleClick(cell, color) {
  let row = cell.parentNode;
  let col = cell.cellIndex;
  let rowIndex = 0;

  while (rowIndex < 5 && row.nextSibling) {
    row = row.nextSibling;
    rowIndex++;
    if (!row.children[col].classList.contains("filled")) {
      break;
    }
  }
  row.children[col].classList.add("filled", color);

  if (checkForWin(rowIndex, col)) {
    prompt.innerHTML = `Player ${color} wins!`;
    for (let i = 0; i < cells.length; i++) {
      cells[i].removeEventListener("click", handleClick);
    }
  } else if (checkForDraw()) {
    prompt.innerHTML = "Draw!";
  } else {
    player = player === "red" ? "yellow" : "red";
    prompt.innerHTML = `Player ${player}'s turn`;
  }
}

function checkForWin(row, col) {
  return (
    checkHorizontal(row, col) ||
    checkVertical(row, col) ||
    checkDiagonalLeft(row, col) ||
    checkDiagonalRight(row, col)
  );
}

function checkHorizontal(row, col) {
  let count = 0;
  for (let i = col; i < 7; i++) {
    if (
      !table.rows[row].cells[i].classList.contains("filled") ||
      table.rows[row].cells[i].classList.contains("yellow")
    ) {
      break;
    }
    count++;
    if (count >= 4) {
      return true;
    }
  }
  count = 0;
  for (let i = col; i >= 0; i--) {
    if (
      !table.rows[row].cells[i].classList.contains("filled") ||
      table.rows[row].cells[i].classList.contains("yellow")
    ) {
      break;
    }
    count++;
    if (count >= 4) {
      return true;
    }
  }
  return false;
}

function checkVertical(row, col) {
  let count = 0;
  for (let i = row; i < 6; i++) {
    if (
      !table.rows[i].cells[col].classList.contains("filled") ||
      table.rows[i].cells[col].classList.contains("yellow")
    ) {
      break;
    }
    count++;
    if (count >= 4) {
      return true;
    }
  }
  return false;
}

function checkDiagonal(row, col) {
    return false;
}

function checkForDraw() {
    return false;
}
