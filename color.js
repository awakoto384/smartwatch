// define a function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let blackBox = document.getElementById("black");
let redBox = document.getElementById("red");
let blueBox = document.getElementById("blue");
let purpleBox = document.getElementById("purple");
let pinkBox = document.getElementById("pink");

blackBox.addEventListener("click", function(){
  document.getElementById("watchband").src = "/images/black.png";
})
redBox.addEventListener("click", function(){
  document.getElementById("watchband").src = "/images/red.png";
})
blueBox.addEventListener("click", function(){
  document.getElementById("watchband").src = "/images/blue.png";
})
purpleBox.addEventListener("click", function(){
  document.getElementById("watchband").src = "/images/purple.png";
})
pinkBox.addEventListener("click", function(){
  document.getElementById("watchband").src = "/images/pink.png";
})

// ------------------------

var timeBtn = document.getElementById("time");
var heartBtn = document.getElementById("heart");

function changeToHeart() {
  var div = document.getElementById("watchContent");
  div.innerHTML = "";

  // Create the new img and p elements
  var img = document.createElement("img");
  img.src = "/images/heart.gif";
  img.className = "heartImg";
  var h2 = document.createElement("h2");
  h2.textContent = "70";
  h2.className = "hearttext";

  div.style.bottom = '20%';
  // add new elements
  div.appendChild(img);
  div.appendChild(h2);
  heartBtn.classList.add("active");
  timeBtn.classList.remove("active");

}

function changeToTime() {
  var div = document.getElementById("watchContent");
  div.innerHTML = "";

  // Create the time text
  var h1 = document.createElement("h1");
  h1.id = "watchtext";
  var date = new Date();
  var current_time = (date.getHours()<10?'0':'') + date.getHours()+":"+ (date.getMinutes()<10?'0':'') + date.getMinutes()+":"+ (date.getSeconds()<10?'0':'') + date.getSeconds();
  h1.textContent = current_time;

  div.style.bottom = '30%';
  // add new elements
  div.appendChild(h1);
  timeBtn.classList.add("active");
  heartBtn.classList.remove("active");
}

let isEventListenerEnabled = false;

//两个按钮效果交替

// Get references to the buttons
const button1 = document.getElementById('time');
const button2 = document.getElementById('heart');

// Add an EventListener to button1
button1.addEventListener('click', function() {
  if (isEventListenerEnabled) {
    // Handle the button1 click event
    console.log('time clicked');
    changeToTime();
  }
  isEventListenerEnabled = !isEventListenerEnabled;
});

// Add an EventListener to button2
button2.addEventListener('click', function() {
  // Toggle the flag variable
  console.log('heart clicked');
  isEventListenerEnabled = !isEventListenerEnabled;
  changeToHeart();
});