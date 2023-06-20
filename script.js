// Membuat kotak-kotak permainan
const gameBoard = document.getElementById('game-board');

for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  gameBoard.appendChild(cell);
}

// Menambahkan event listener untuk setiap kotak
const cells = document.getElementsByClassName('cell');

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    this.innerHTML = 'X';
  });
}
