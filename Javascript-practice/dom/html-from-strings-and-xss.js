// Select the element with the class of item
const item = document.querySelector('.item');

// Log its innerHTML to see its content
console.log(item.innerHTML);
// ... existing code ...

const src = `https://picsum.photos/200`; // A placeholder image URL
const desc = "Cute pup"; // A description for our image

const myHTML = `
  <div class="image-wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

item.innerHTML = myHTML;

console.log(item.innerHTML);