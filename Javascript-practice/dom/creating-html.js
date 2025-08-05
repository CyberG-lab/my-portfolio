// Creating HTML Elements
console.log("=== Creating HTML Elements ===");

// Experiment 1: Creating a Paragraph Element
const myParagraph = document.createElement('p');
console.log(myParagraph);

// Experiment 2: Adding Text Content and a Class
myParagraph.textContent = 'I am a dynamic paragraph!';
myParagraph.classList.add('special');
console.log(myParagraph);

// Experiment 3: Creating an Image Element
const myImage = document.createElement('img');
myImage.src = "https://picsum.photos/500";
myImage.alt = "A random photo";
console.log(myImage);

// Experiment 4: Creating a Div Element with a Class
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Experiment 5: Appending a Paragraph to the Body
//document.body.appendChild(myParagraph);


// Experiment 6: Appending Multiple Elements Efficiently
// First, append the paragraph and image to the div
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

// Then, append the div (containing the paragraph and image) to the body
document.body.appendChild(myDiv);