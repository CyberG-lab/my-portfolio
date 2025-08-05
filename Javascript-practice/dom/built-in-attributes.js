// Natural Width and Load Event
//console.log("=== Natural Width ===");

//const pic = document.querySelector('.nice');
//console.log('Initial Natural Width:', pic.naturalWidth);


// Wait for the image to load to get its natural dimensions
const pic = document.querySelector('.nice');

pic.addEventListener('load', function() {
  console.log('Natural Width after image load:', pic.naturalWidth);
});

// Alternatively, wait for the entire window to load (including all resources)
// window.addEventListener('load', function() {
//   console.log('Natural Width after window load:', pic.naturalWidth);
// });