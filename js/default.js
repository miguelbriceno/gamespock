//Instructions.
alert("First enter the name of the players, then press the button and see who wins!");

//Obtain players names.
var validate = false;

while (validate == false){
  var nameP1 = prompt("Enter the name for player 1:");
  var nameP2 = prompt("Enter the name for player 2:");

  if (nameP1 != "" && nameP2 != "") {
    validate = true;
  } else {
    alert("No empty names allowed!, try again please.");
  }
}

//Change names inside the page.
document.querySelector(".player1").textContent = nameP1;
document.querySelector(".player2").textContent = nameP2;
