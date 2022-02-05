//Instructions.
alert("Ingresa los nombres de los dos jugadores, ¡luego aprieta el botón y ve quien gana!");

//Obtain players names.
var validate = false;

while (validate == false){
  var nameP1 = prompt("Ingresa el nombre del player 1:");
  var nameP2 = prompt("Ingresa el nombre del player 2:");

  if (nameP1 != "" && nameP2 != "") {
    validate = true;
  } else {
    alert("Uno de los nombres está vacío, escribelos de nuevo.");
  }
}

//Change names inside the page.
document.querySelector(".player1").textContent = nameP1;
document.querySelector(".player2").textContent = nameP2;
