// By Azlee Babar, ShiftClick

players = ['o', 'x'];
currentPlayerIndex = 0;
board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

play = (x, y) => {
  if (getSquare(x, y) === ' ') {
    setSquare(x, y, currentPlayer());
    document.getElementById('square' + x + y).innerHTML = currentPlayer();
    if (detectWinner()) {
      alert(currentPlayer() + ' wins!');
    }
    changePlayer();
  }
};

// returns true if any row, column or diagonal is winning

detectWinner = () => {
  if (checkRows() || checkColumns() || checkDiagonals()) return true;
  return false;
};

// takes in an array, returns true if all items are the same (and not empty)

const checkLine = line => {
  if (line[0] === ' ') return false;
  return line.every(square => square === line[0]);
};

// checks all columns, returns true if any column is winning

const checkColumns = () => {
  for (let i = 0; i < 3; i++) {
    const column = board[i];
    if (checkLine(column)) return true;
  }
  return false;
};

// checks all rows, returns true if any row is winning

const checkRows = () => {
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      row.push(board[j][i]);
    }
    if (checkLine(row)) return true;
  }
  return false;
};

​// checks all diagonals, returns true if any diagonal is winning

const checkDiagonals = () => {
  let leftToRight = [];
  let rightToLeft = [];

  for (let i = 0; i < 3; i++) {
    leftToRight.push(board[i][i]);
    rightToLeft.push(board[2 - i][i]);
  }

​  if (checkLine(leftToRight) || checkLine(rightToLeft)) return true;
  return false;
};

currentPlayer = () => {
  return players[currentPlayerIndex];
};

changePlayer = () => {
  currentPlayerIndex = (currentPlayerIndex + 1) % 2;
};

getSquare = (x, y) => {
  return board[x][y];
};

setSquare = (x, y, value) => {
  board[x][y] = value;
};
