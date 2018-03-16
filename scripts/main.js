var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Arsenal.png') {
      myImage.setAttribute ('src','images/TottenhamShit.jpg');
    } else {
      myImage.setAttribute ('src','images/Arsenal.png');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Your name is: ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Your name is: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


