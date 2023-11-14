const button = document.getElementsByTagName('button')[0]

const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')

player1.style.marginLeft = 0;
player2.style.marginLeft = 0;

button.addEventListener('click', function () {

  player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 300 + 'px';

  player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 300 + 'px';
  const player1Winer = parseInt(player1.style.marginLeft) > window.innerWidth;
  const player2Winer = parseInt(player2.style.marginLeft) > window.innerWidth;

  if (player1Winer) {
    alert('PLAYER 1 VENCEU!!!');
    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;
  }
  if (player2Winer) {
    alert('PLAYER 2 VENCEU!!!');
    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;
  }

})