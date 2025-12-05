const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // cols
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

const createPlayer = (name) => {
  const createdName = window.prompt(`Enter a name for ${name}`, name) ?? name;
  console.log(`created ${createdName}`);
  return createdName;
};

const game = (() => {
  let tiles = Array(9).fill(null);
  let playerIndex = 0;
  let winners = [];
  let round = 1;

  const players = [
    { name: createPlayer('Player 1'), symbol: 'x' },
    { name: createPlayer('Player 2'), symbol: 'o' },
  ];

  const play = (i) => {
    tiles[i] = players[playerIndex].symbol;
  };

  const toggle = () => (playerIndex = 1 - playerIndex);

  const increaseRound = () => {
    round++;
  };

  const reset = () => {
    tiles = Array(9).fill(null);
    playerIndex = 0;
    winners = [];
    round = 1;
  };

  const checkWin = () => {
    for (const combo of WIN_PATTERNS) {
      const [a, b, c] = combo;
      if (tiles[a] && tiles[a] === tiles[b] && tiles[b] === tiles[c]) {
        winners = combo;
        return players[playerIndex].name;
      }
    }
    return null;
  };

  return {
    play,
    toggle,
    reset,
    checkWin,
    increaseRound,
    get winners() {
      return winners;
    },
    get tiles() {
      return tiles;
    },
    get player() {
      return players[playerIndex];
    },
    get round() {
      return round;
    },
  };
})();

const display = (() => {
  const roundEl = document.getElementById('round');
  const playerEl = document.getElementById('player');
  const tileEls = document.querySelectorAll('.tile');
  const winnerEl = document.getElementById('winner');
  const resetBtn = document.getElementById('reset-btn');

  const dialog = document.querySelector('dialog');
  const closeBtn = document.getElementById('close-btn');
  const playAgainBtn = document.getElementById('play-again-btn');

  const renderBoard = () => {
    game.tiles.forEach((value, i) => {
      tileEls[i].textContent = value ?? '';
      tileEls[i].classList.remove('winning-tile');
      tileEls[i].classList.add('active');
    });
  };

  const renderTurnInfo = () => {
    playerEl.textContent = `${game.player.name} (${game.player.symbol})`;
    roundEl.textContent = game.round;
  };

  const renderDialog = () => {
    winnerEl.textContent = game.player.name;
    dialog.showModal();
  };

  const highlightWin = (indices) => {
    indices.forEach((i) => tileEls[i].classList.add('winning-tile'));
  };

  const handleTileClick = (i) => {
    if (game.tiles[i] !== null || game.winners.length) return;

    game.play(i);
    tileEls[i].classList.remove('active');
    renderBoard();

    const winner = game.checkWin();
    if (winner) {
      highlightWin(game.winners);
      tileEls.forEach((tile) => {
        tile.classList.remove('active');
      });
      renderDialog();
      return;
    }

    game.toggle();
    game.increaseRound();
    renderTurnInfo();
  };

  tileEls.forEach((tile, i) =>
    tile.addEventListener('click', () => handleTileClick(i))
  );

  resetBtn.addEventListener('click', () => {
    game.reset();
    renderBoard();
    renderTurnInfo();
  });

  closeBtn.addEventListener('click', () => {
    dialog.close();
  });

  playAgainBtn.addEventListener('click', () => {
    dialog.close();
    game.reset();
    renderBoard();
    renderTurnInfo();
  });

  renderBoard();
  renderTurnInfo();

  return { renderBoard, renderTurnInfo };
})();
