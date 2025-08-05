// Toggling a class with animation on click
//console.log("=== Toggling Class with Animation ===");

//const pic = document.querySelector(".nice");

//function toggleRound() {
  // Toggle 'round' and 'animated' classes
  //pic.classList.toggle('round');
  //pic.classList.toggle('animated'); // Also toggle a class for advanced animations
//}

// Attach the toggleRound function to the 'click' event of the image
//pic.addEventListener('click', toggleRound);
//console.log('Click the image to see the toggle effect!');

// Checking for a class
console.log("=== Checking for a Class ===");

const pic = document.querySelector(".nice");

// Add the 'open' class for this experiment
pic.classList.add('open');

const hasOpen = pic.classList.contains('open');
console.log('Does pic have class "open"?', hasOpen); // Should be true

pic.classList.remove('open');
const hasOpenAfterRemove = pic.classList.contains('open');
console.log('Does pic have class "open" after removal?', hasOpenAfterRemove); // Should be false