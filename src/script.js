const button = document.getElementsByTagName('button')[0];

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const scorePlayer1 = document.getElementById('numberScore1');
const scorePlayer2 = document.getElementById('numberScore2');

scorePlayer1.innerText = 0
scorePlayer2.innerText = 0

player1.style.marginLeft = 0;
player2.style.marginLeft = 0;

button.addEventListener('click', function () {

  player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 300 + 'px';

  player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 300 + 'px';
  const player1Winer = parseInt(player1.style.marginLeft) > window.innerWidth;
  const player2Winer = parseInt(player2.style.marginLeft) > window.innerWidth;

  switch (true) {
    case player1Winer:
      alert('PLAYER 1 VENCEU!!!');
      player1.style.marginLeft = 0;
      player2.style.marginLeft = 0;
      scorePlayer1.innerText = parseInt(scorePlayer1.innerText) + 1;
      break;
  
    case player2Winer:
      alert('PLAYER 2 VENCEU!!!');
      player1.style.marginLeft = 0;
      player2.style.marginLeft = 0;
      scorePlayer2.innerText = parseInt(scorePlayer2.innerText) + 1;
      break;
  }

})

const cars = document.getElementById('players');
let player = 1;
const getRunning = document.getElementById('running');
const getSelectionPlayer = document.getElementById('selectionPlayer');

cars.addEventListener('click', function (e) {
  let getClass = e.target.className
  
  if (player === 1) {
    player1.className = `${getClass}`;
    getSelectionPlayer.innerText = "Player 2"
    player = 2
  } else if (player === 2) {
    player2.className = `${getClass}`
    getSelectionPlayer.innerText = "Player 1"
    player = 1;
  }
})