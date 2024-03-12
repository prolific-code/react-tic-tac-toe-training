// src/utils/gameLogic.js

// Function to check for a winner. Returns 'X', 'O', or null as appropriate
export function calculateWinner(squares) {
  // Lines that can be winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Iterate through the winning lines to see if any combination is met
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // No winner yet
  return null;
}

// Function to check if all squares are filled and the game is a draw
export function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false; // At least one square is not filled
    }
  }
  return true; // All squares are filled
}
