const container = document.getElementById('grid-container');
const input = document.querySelector('input');
const output = document.querySelector('output');
const resetBtn = document.getElementById('reset-btn');
const radioInputs = document.querySelectorAll('input[type="radio"]');

let squares, selectedChoice;

const updateGrid = (value) => {
  const style =
    `height: calc(var(--container-size) / ${value});` +
    ` width: calc(var(--container-size) / ${value});`;

  container.innerHTML = '';
  output.textContent = `${input.value}x${input.value}`;

  for (let i = 0; i < value; i++) {
    container.innerHTML +=
      '<div class="grid-row">' +
      `<div class="grid-square" style="${style}"></div>`.repeat(value) +
      '</div>';
  }

  squares = document.querySelectorAll('.grid-square');

  squares.forEach((square) => {
    square.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    square.addEventListener('mouseenter', () => {
      switch (selectedChoice) {
        case 'normal':
          let prevColor = square.style.backgroundColor;

          if (!square.style.backgroundColor.includes('0, 0, 0')) {
            prevColor = 'rgba(0, 0, 0, 0)';
          }

          const prevAlpha = parseFloat(prevColor.split(',')[3]);

          if (prevAlpha !== 1) {
            square.style.backgroundColor = `rgba(0, 0, 0, ${prevAlpha + 0.1})`;
          }

          break;
        case 'rainbow':
          const red = Math.floor(Math.random() * 255);
          const green = Math.floor(Math.random() * 255);
          const blue = Math.floor(Math.random() * 255);
          square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
          break;
        default:
          break;
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  updateGrid(input.value);
  selectedChoice = 'normal';

  radioInputs.forEach((input) => {
    input.addEventListener('click', (event) => {
      selectedChoice = event.target.value;
    });
  });

  resetBtn.addEventListener('click', () => {
    updateGrid(input.value);
  });

  input.addEventListener('input', (event) => {
    output.textContent = `${event.target.value}x${event.target.value}`;
  });

  input.addEventListener('mouseup', (event) => {
    updateGrid(event.target.value);
  });
});
