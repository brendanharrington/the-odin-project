const container = document.getElementById('grid-container');
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
};

document.addEventListener('DOMContentLoaded', (event) => {
  updateGrid(value);
});
