players = ['o', 'x'];
currentPlayerIndex = 0;
board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

winningBoards = [['o', 'o', 'o'], ['x', 'x', 'x']];

play = (x, y) => {
  if (getSquare(x, y) === ' ') {
    setSquare(x, y, currentPlayer());
    document.getElementById('square' + x + y).innerHTML = currentPlayer();
    if (detectWinner()) {
      alert(currentPlayer() + ' wins!');
      console.log('test');
    }
    changePlayer();
  }
};

detectWinner = () => {
  for (let i = 0; i < board.length; i += 1) {
    console.log('FOR LOOP FIRES');
    console.log(board);
    if (board[i] == ['o', 'o', 'o']) {
      console.log('if triggered');
      return True;
    }
    //return board.includes(winningBoards[i]);
  }
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
