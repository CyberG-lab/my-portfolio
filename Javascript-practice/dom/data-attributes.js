// Data Attributes
//console.log("=== Data Attributes ===");

//const customPic = document.querySelector('.custom');
//console.log('Dataset of custom image:', customPic.dataset);

// Using Data Attributes for Interaction
console.log("=== Data Attributes Interaction ===");

const customPic = document.querySelector('.custom');

customPic.addEventListener('click', function() {
  alert(`Welcome ${customPic.dataset.name} ${customPic.dataset.last}!`);
});

console.log('Click the first image to see the alert!');