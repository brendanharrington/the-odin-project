const container = document.getElementById('grid-container');
const input = document.querySelector('input');
const output = document.querySelector('output');
const resetBtn = document.getElementById('reset-btn');

let squares;

const updateGrid = (value) => {
  const style = (
    `height: calc(var(--container-size) / ${value});`
    + ` width: calc(var(--container-size) / ${value});`  
  );

  container.innerHTML = '';
  output.textContent = `${input.value}x${input.value}`;

  for (let i = 0; i < value; i++) {
    container.innerHTML += (
      '<div class="grid-row">'
      + `<div class="grid-square" style="${style}"></div>`.repeat(value)
      + '</div>'
    );
  }

  squares = document.querySelectorAll('.grid-square');

  squares.forEach((square) => {
    square.addEventListener('mouseenter', (event) => {
      square.style.backgroundColor = 'dimgrey';
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  updateGrid(input.value);

  resetBtn.addEventListener('click', () => {
    updateGrid(input.value);
  });

  input.addEventListener('input', (event) => {
    output.textContent = `${event.target.value}x${event.target.value}`;
  });

  input.addEventListener('mouseup', (event) => {
    updateGrid(event.target.value)
  });
});
