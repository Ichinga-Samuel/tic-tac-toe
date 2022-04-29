let firstMove = true;
let currentPlayer;
let gameButtons = document.querySelectorAll("#game-grid button");
console.log(gameButtons)
function playMove() {
  console.log(this.innerText)
  // choose a player at random for the first move
  if(firstMove) {
    currentPlayer = Math.round(Math.random()) === 0 ? 'O' : 'X';
    firstMove = false;
  }
  else {
    if(this.innerText) return;
    console.log("Will not reach here")
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
  }

  this.innerText = currentPlayer;
}

gameButtons.forEach(button => button.onclick = playMove);

document.querySelector("#replay-button").onclick = replay
// () => {
//   console.log(this)
//   gameButtons.forEach(button => button.innerText = '');
// };

function replay(){
  console.log(this.innerText)
  gameButtons.forEach(button => button.innerText = '');
}