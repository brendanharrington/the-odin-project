const createPlayer = (name) => {
  return { name };
};

const game = (function () {
  const playerOne = createPlayer('Player 1');
  const playerTwo = createPlayer('Player 2');

  let round = 1;
  let currentPlayer = playerOne.name;
  let tiles = Array(9);
  let winner = null;
  let winningTiles = [];

  // const getRound = () => round;
  const increaseRound = () => ++round;
  const resetRound = () => {
    round = 1;
    return round;
  };

  // const getCurrentPlayer = () => currentPlayer;
  const changeCurrentPlayer = () => {
    if (currentPlayer === playerOne.name) {
      currentPlayer = playerTwo.name;
    } else {
      currentPlayer = playerOne.name;
    }
    return currentPlayer;
  };
  const resetCurrentPlayer = () => {
    currentPlayer = playerOne.name;
    return currentPlayer;
  };

  // const getTiles = () => tiles;
  const setTiles = (index) => {
    tiles[index] = currentPlayer === playerOne.name ? 'x' : 'o';
    return tiles[index];
  };
  const resetTiles = () => {
    tiles = Array(9);
    winningTiles = [];
    return tiles;
  };

  const resetGame = () => {
    round = 1;
    currentPlayer = playerOne.name;
    tiles = Array(9);
    winner = null;
    winningTiles = []
    return { round, currentPlayer };
  }

  const getWinningTiles = () => winningTiles;

  const checkForWin = () => {
    if (
      // columns
      (tiles[0] && tiles[0] === tiles[3] && tiles[3] === tiles[6]) ||
      (tiles[1] && tiles[1] === tiles[4] && tiles[4] === tiles[7]) ||
      (tiles[2] && tiles[2] === tiles[5] && tiles[5] === tiles[8])
    ) {
      if (tiles[0] === 'x' || tiles[1] === 'x' || tiles[2] === 'x') {
        winner = playerOne.name;
      } else {
        winner = playerTwo.name;
      }

      if (tiles[0]) {
        winningTiles = [0, 3, 6];
      } else if (tiles[1]) {
        winningTiles = [1, 4, 7];
      } else if (tiles[2]) {
        winningTiles = [2, 5, 8];
      }
    } else if (
      // rows
      (tiles[0] && tiles[0] === tiles[1] && tiles[1] === tiles[2]) ||
      (tiles[3] && tiles[3] === tiles[4] && tiles[4] === tiles[5]) ||
      (tiles[6] && tiles[6] === tiles[7] && tiles[7] === tiles[8]) 
    ) {
      if (tiles[0] === 'x' || tiles[3] === 'x' || tiles[6] === 'x') {
        winner = playerOne.name;
      } else {
        winner = playerTwo.name;
      }

      if (tiles[0]) {
        winningTiles = [0, 1, 2];
      } else if (tiles[3]) {
        winningTiles = [3, 4, 5];
      } else if (tiles[6]) {
        winningTiles = [6, 7, 8];
      }
    } else if (
      // diagonals
      (tiles[0] && tiles[0] === tiles[4] && tiles[4] === tiles[8]) ||
      (tiles[2] && tiles[2] === tiles[4] && tiles[4] === tiles[6])
    ) {
      if (tiles[0] === 'x' || tiles[2] === 'x') {
        winner = playerOne.name;
      } else {
        winner = playerTwo.name;
      }

      if (tiles[0]) {
        winningTiles = [0, 4, 8];
      } else if (tiles[2]) {
        winningTiles = [2, 4, 6];
      }
    }
    console.log(winner)
    return winner;
  }

  return { increaseRound, setTiles, changeCurrentPlayer, checkForWin, getWinningTiles, resetGame };
})();

const display = (function () {
  const round = document.getElementById('round');
  const player = document.getElementById('player');
  const tiles = document.querySelectorAll('.tile');
  const resetBtn = document.getElementById('reset-btn');

  tiles.forEach((tile, idx) => {
    tile.addEventListener('click', () => {
      if (tile.textContent !== '' || game.checkForWin()) return;

      tile.textContent = game.setTiles(idx);
      if (!game.checkForWin()) {
        player.textContent = game.changeCurrentPlayer();
        round.textContent = game.increaseRound();
      } else {
        for (const i of game.getWinningTiles()) {
          tiles[i].classList.add('winning-tile');
          console.log(tiles[i]);
        }
      }
    });
  });

  resetBtn.addEventListener('click', () => {
    const result = game.resetGame();
    round.textContent = result.round;
    player.textContent = result.currentPlayer;

    tiles.forEach(tile => {
      tile.classList.remove('winning-tile');
      tile.textContent = '';
    });
  });

  return { round, player, tiles }
})();