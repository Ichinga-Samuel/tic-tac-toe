let firstMove = true;
let currentPlayer;
let gameButtons = document.querySelectorAll("#game-grid button");

function playMove() {
  // choose a player at random for the first move
  if(firstMove) {
    currentPlayer = Math.round(Math.random()) === 0 ? 'O' : 'X';
    firstMove = false;
  }
  else {
    if(this.innerText)
      return;
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
  }

  this.innerText = currentPlayer;
  this.setAttribute('disabled', true)
}

function checkGame(){
  // convert the nodelist to an Array
  let gb = Array(...gameButtons).map(button => button.innerText);
  const winArrays = [
    new Set ([gb[0], gb[1], gb[2]]),
    new Set([gb[3], gb[4], gb[5]]),
    new Set([gb[6], gb[7], gb[8]]),
    new Set([gb[0], gb[3], gb[6]]),
    new Set([gb[1], gb[4], gb[7]]),
    new Set([gb[2], gb[5], gb[8]]),
    new Set([gb[0], gb[4], gb[8]]),
    new Set([gb[2], gb[4], gb[6]]),
  ];
  console.log(winArrays)
  // If all the elements of a set are the same then it will have a size of one
  // by filtering the array of winning combinations we obtain arrays of size 1 that have either "X" or "0"
  let fil = winArrays.filter(x => (x.has("X") || x.has("O")) && (x.size === 1))
  console.log(fil)
  if(fil.length){
    let winner = fil[0].has("X") ? "X": "O";
    document.getElementById('win').innerText = `The Winner is Player ${winner}`
    gameButtons.forEach(button => button.setAttribute('disabled', true))
    return;
  }
  // check completion. If no button has an empty text. then game is over
  let empty = gb.filter(x => !x)
  console.log(empty)
  if(!empty.length){
    document.getElementById('win').innerText = "Game Over!!! Nobody Won"
    gameButtons.forEach(button => button.setAttribute('disabled', true))
  }

}


gameButtons.forEach(button => button.onclick = playMove);
gameButtons.forEach(button => button.addEventListener('click', checkGame));

document.querySelector("#replay-button").onclick = () => {
  gameButtons.forEach(button => {button.innerText = ''; button.removeAttribute('disabled')});
  document.getElementById('win').innerText = ""

};
