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

// ... existing code ...

// Inserting Elements with insertAdjacentElement()
console.log("=== insertAdjacentElement() ===");

// Experiment 1: Incorrect Insertion with appendChild()
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

// If we use appendChild, it will add the heading at the very end of myDiv
// myDiv.appendChild(heading); // Comment this line out after observing its effect

// Run and Test: Observe the position of "Cool Things" in your browser. It will appear after the image.
// Now, comment out the line `myDiv.appendChild(heading);` before proceeding.

// Experiment 2: Correct Insertion with insertAdjacentElement('afterbegin')
// We want the heading to be at the beginning of myDiv
myDiv.insertAdjacentElement('afterbegin', heading);