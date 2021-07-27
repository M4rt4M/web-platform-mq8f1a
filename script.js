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

detectWinner = () => {};

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
