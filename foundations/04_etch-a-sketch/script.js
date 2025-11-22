const container = document.getElementById('grid-container');
let squares;
const value = 16;

const updateGrid = () => {
  container.innerHTML = '';

  for (let i = 0; i < value; i++) {
    container.innerHTML += `
      <div class="grid-row">
        ${'<div class="grid-square"></div>'.repeat(value)}
      </div>
      `;
  }

  squares = document.querySelectorAll('.grid-square');
};

document.addEventListener('DOMContentLoaded', (event) => {
  updateGrid(value);

  squares.forEach((square) => {
    square.addEventListener('mouseenter', (event) => {
      square.style.backgroundColor = 'grey';
    });
  });
});
