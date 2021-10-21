
function winner(number) {
  return winningButton = Math.floor(Math.random() * number);
}

function playerChoice(buttonId, winingButton) {
  if(buttonId == winingButton) {
    document.getElementById("WINNER/LOSER").innerHTML = "<div class='won'><p>You won!!</p></div>";
    // return alert('You won!');
  } else {
    document.getElementById("WINNER/LOSER").innerHTML = "<div class='lose'><p>You lose!!</p></div>";
    // return alert('You lose');
  }
}

function numberOfButtons() {
    const boxValue = document.getElementById("NumberBox").value;
    let sameValue = boxValue;
    let index = 0;
    let winingButton = winner(boxValue);
    while (sameValue > 0) {
        document.getElementById("WINNER/LOSER").innerHTML +=
        `<button type="button" onclick="return playerChoice(${index}, ${winingButton});">Press me</button>`
        ++index;
        --sameValue;
    }
}
