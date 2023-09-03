let currentPlayer = 'X';
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');

// Function to check for a win
function checkWin() {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameOver = true;
            status.textContent = `Player ${currentPlayer} wins!`;
        }
    }

    if (!cells.some(cell => cell.textContent === '') && !gameOver) {
        gameOver = true;
        status.textContent = "It's a draw!";
    }
}

// Event listener for cell clicks
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '' && !gameOver) {
            cell.textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${currentPlayer}'s turn`;
        }
    });
});

// Event listener for reset button
resetButton.addEventListener('click', () => {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameOver = false;
    statusbar.textContent = "Player X's turn";
});

