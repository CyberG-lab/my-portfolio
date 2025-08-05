// Working with classList
//console.log("=== Working with ClassList ===");

//const pic = document.querySelector('.nice');
//console.log('Initial ClassList:', pic.classList);

// Adding a class
//console.log("=== Adding a Class ===");

//const pic = document.querySelector(".nice");
//pic.classList.add("seen");
//console.log('ClassList After Add:', pic.classList);


// Removing a class
//console.log("=== Removing a Class ===");

//const pic = document.querySelector(".nice");
//pic.classList.remove('cool');
//console.log('ClassList After Remove:', pic.classList);


// Toggling a class
console.log("=== Toggling a Class ===");

const pic = document.querySelector(".nice");

// This will add 'round' if it's not there, and remove it if it is.
pic.classList.toggle('round');
 console.log('ClassList After First Toggle:', pic.classList);

// Toggling a class with animation on click
//console.log("=== Toggling Class with Animation ===");

//const pic = document.querySelector(".nice");

//function toggleRound() {
  // Toggle 'round' and 'animated' classes
  //pic.classList.toggle('round');
  //pic.classList.toggle('animated'); // Also toggle a class for advanced animations
//}