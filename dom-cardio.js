// Function to generate player cards (modified)
function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7;
  return `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>They are ${height} cm tall and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
      <button class="delete" type="button">&times; Delete</button> <!-- Added delete button -->
    </div>
  `;
}

// Exercise 1: Create and Append a Wrapper Div
const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

// Exercise 2: Create and Insert an Unordered List
const ulHTML = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

// We use insertAdjacentHTML because ulHTML is a string, not an Element object.
div.insertAdjacentHTML('beforeend', ulHTML);

// Exercise 3: Create and Append an Image
const img = document.createElement('img');
img.src = 'https://picsum.photos/500'; // A random image
img.width = 250;
img.height = 250; // Set height to prevent layout jumps during loading
img.classList.add('cute');
img.alt = "A cute puppy";

div.appendChild(img); // Appending directly to the div

// Exercise 4: Insert a Div with Two Paragraphs Above the List
const paragraphsHTML = `
  <div class="my-paragraphs">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;

// To insert before the UL, we first need a reference to the UL element.
// Since ulHTML was a string, we can't directly use the 'ul' variable from Exercise 2.
const ulElement = div.querySelector('ul'); // Select the UL that's now in the DOM

ulElement.insertAdjacentHTML('beforebegin', paragraphsHTML);

// Now, let's target the second paragraph in our newly inserted div
const myParagraphsDiv = div.querySelector('.my-paragraphs');
// The children property gives us an HTMLCollection, which is zero-indexed.
// So, children[1] refers to the second child element.
myParagraphsDiv.children[1].classList.add('warning');

// Remove the first paragraph
myParagraphsDiv.firstElementChild.remove();

// Exercise 5: Generate Player Cards and Apply Basic Styling
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// Generate HTML for 4 player cards
let allCardsHTML = '';
allCardsHTML += generatePlayerCard('sid', 30, 180);
allCardsHTML += generatePlayerCard('brad', 25, 175);
allCardsHTML += generatePlayerCard('pam', 28, 165);
allCardsHTML += generatePlayerCard('snickers', 5, 50); // A dog! :)

cardsDiv.innerHTML = allCardsHTML;

// Insert the cardsDiv before the wrapper div
// We need a reference to the wrapper div first. Since 'div' was already defined,
// we can reuse that variable if it's in scope, or select it again.
document.body.insertAdjacentElement('afterbegin', cardsDiv);


// Select all the delete buttons that are now in the DOM.
const deleteButtons = document.querySelectorAll('.delete');

// Define a function to handle the click event
function deleteCard(event) {
  console.log('Deleting card...');
  const buttonThatGotClicked = event.currentTarget;

  // Option 1: Using parentElement (works if button's parent is the card)
  // buttonThatGotClicked.parentElement.remove();

  // Option 2: Using closest() (more robust, looks up the tree for the matching selector)
  buttonThatGotClicked.closest('.playerCard').remove();

  console.log('Card removed!');
}

// Attach a click event listener to each delete button
deleteButtons.forEach(button => button.addEventListener('click', deleteCard));