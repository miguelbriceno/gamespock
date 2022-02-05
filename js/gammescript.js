//Funtion to obtain a random number from 1 to 5
function luck() {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 5) + 1;
  return randomNumber;
}

//Funtion to change the image
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

// Funtion to determine who wins

// Function to change the labels

// Function to play
