/*Funtion to obtain a random number from 1 to 5 -- Does not recieve parameters,
Return a random number between 1 to 5.*/
function luck() {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 5) + 1;
  return randomNumber;
}


/*Funtion to change the images -- recieve a random number and an integer 0 or 1
as index. Does not return data.*/
function pickIt(randomNum, imageIndex) {
  // Obtain the colection of images by class
  var imageArray = document.getElementsByClassName("picture");
  // Obtain the src atributte of the image
  var stringSrc = imageArray[imageIndex].getAttribute("src");
  // Extract the string part to mantain
  stringSrc = stringSrc.slice(0, (length - 5));
  // Concat string with random number and add the rest of the string
  stringSrc = stringSrc + randomNum + ".png";
  // Replace the original src atributte with the new string.
  imageArray[imageIndex].setAttribute("src", stringSrc);
}


/* Funtion to determine who wins -- Recive random numbers, return a frase with
 the winner name in it*/
function winner(randomN1, randomN2) {
  var winner = "";
  var playerOneWin = "";
  //Compare results to obtain who wins. Check gamerules.txt
  if (randomN1 == 1 && randomN2 == 3) {
    playerOneWin = true;
  } else if (randomN1 == 3 && randomN2 == 2) {
    playerOneWin = true;
  } else if (randomN1 == 2 && randomN2 == 1) {
    playerOneWin = true;
  } else if (randomN1 == 1 && randomN2 == 4) {
    playerOneWin = true;
  } else if (randomN1 == 4 && randomN2 == 5) {
    playerOneWin = true;
  } else if (randomN1 == 5 && randomN2 == 3) {
    playerOneWin = true;
  } else if (randomN1 == 3 && randomN2 == 4) {
    playerOneWin = true;
  } else if (randomN1 == 4 && randomN2 == 2) {
    playerOneWin = true;
  } else if (randomN1 == 2 && randomN2 == 5) {
    playerOneWin = true;
  } else if (randomN1 == 5 && randomN2 == 1) {
    playerOneWin = true;
  } else if (randomN1 == 3 && randomN2 == 1) {
    playerOneWin = false;
  } else if (randomN1 == 2 && randomN2 == 3) {
    playerOneWin = false;
  } else if (randomN1 == 1 && randomN2 == 2) {
    playerOneWin = false;
  } else if (randomN1 == 4 && randomN2 == 1) {
    playerOneWin = false;
  } else if (randomN1 == 5 && randomN2 == 4) {
    playerOneWin = false;
  } else if (randomN1 == 3 && randomN2 == 5) {
    playerOneWin = false;
  } else if (randomN1 == 4 && randomN2 == 3) {
    playerOneWin = false;
  } else if (randomN1 == 2 && randomN2 == 4) {
    playerOneWin = false;
  } else if (randomN1 == 5 && randomN2 == 2) {
    playerOneWin = false;
  } else if (randomN1 == 1 && randomN2 == 5) {
    playerOneWin = false;
  } else if (randomN1 == randomN2) {
    playerOneWin = "";
  } else {
    alert("Error");
  }
  //Returning message with winner name
  if (playerOneWin = true) {
    winner = "Congratulations, " + document.querySelector(".player1") + " is the winner!";
  } else if (playerOneWin = false) {
    winner = "Congratulations, " + document.querySelector(".player2") + " is the winner!";
  } else {
    winner = "This is a draw, try again.";
  }
  return winner;
}


/*Function to obtain the message -- Recive random numbers, return a personalized
message.*/
function msj(randomN1, randomN2) {
  var msj = "";
  //Compare results to personalize message. Check gamerules.txt
  if (randomN1 == 1 && randomN2 == 3) {
    msj = "Stone smashes Scisors";
  } else if (randomN1 == 3 && randomN2 == 2) {
    msj = "Scisors cut Papper";
  } else if (randomN1 == 2 && randomN2 == 1) {
    msj = "Papper covers Stone";
  } else if (randomN1 == 1 && randomN2 == 4) {
    msj = "Stone smashes Lizard";
  } else if (randomN1 == 4 && randomN2 == 5) {
    msj = "Lizard poison Spock";
  } else if (randomN1 == 5 && randomN2 == 3) {
    msj = "Spock brake Scisors";
  } else if (randomN1 == 3 && randomN2 == 4) {
    msj = "Scisors decapitate Lizard";
  } else if (randomN1 == 4 && randomN2 == 2) {
    msj = "Lizard eats Papper";
  } else if (randomN1 == 2 && randomN2 == 5) {
    msj = "Papper unauthorize Spock";
  } else if (randomN1 == 5 && randomN2 == 1) {
    msj = "Spock vaporize Stone";
  } else if (randomN1 == 3 && randomN2 == 1) {
    msj = "Scisors are smashed by Stone";
  } else if (randomN1 == 2 && randomN2 == 3) {
    msj = "Papper is cut by Scisors";
  } else if (randomN1 == 1 && randomN2 == 2) {
    msj = "Stone is covered by Papper";
  } else if (randomN1 == 4 && randomN2 == 1) {
    msj = "Lizard is smashed by Stone";
  } else if (randomN1 == 5 && randomN2 == 4) {
    msj = "Spock is poisoned by Lizard";
  } else if (randomN1 == 3 && randomN2 == 5) {
    msj = "Scisors are broken by Spock";
  } else if (randomN1 == 4 && randomN2 == 3) {
    msj = "Lizard is decapitated by Scirsors";
  } else if (randomN1 == 2 && randomN2 == 4) {
    msj = "Papper is eaten by Lizard";
  } else if (randomN1 == 5 && randomN2 == 2) {
    msj = "Spock is unauthorized by Papper";
  } else if (randomN1 == 1 && randomN2 == 5) {
    msj = "Stone is vaporized by Spock";
  } else if (randomN1 == randomN2) {
    msj = "Nothing happend!";
  }
  return msj;
}


/* Function to change the labels -- Recive a winner frase and a personalized
message. Does not return data */
function updateTags(whoWin, message) {
  var titleTag = document.querySelector(".title");
  var subTitleTag = document.querySelector(".sub");
  var btnTag = document.querySelector(".playBtn");

  titleTag.innerHTML = whoWin;
  titleTag.setAttribute("color", "#FFE162");
  titleTag.setAttribute("font-size", "8vw");
  subTitleTag.innerHTML = message;
  subTitleTag.setAttribute("color", "#EFDAD7");
  subTitleTag.setAttribute("font-size", "5vw");
  btnTag.innerHTML = "Play again!"
}


// Function to play -- Does not recive parameters or retunr data.
function playTheGame() {
  //Obtain the two random numbers
  var randomPlayer1 = luck();
  var randomPlayer2 = luck();
  //Change images using the numbers
  pickIt(randomPlayer1, 0);
  pickIt(randomPlayer2, 1);
  //Obtain winner and message using the random numbers
  var titleLabel = winner(randomPlayer1, randomPlayer2);
  var subTitleLabel = msj(randomPlayer1, randomPlayer2);
  //Change tags using the winner and the message
  updateTags(titleLabel, subTitleLabel);
}
