const item = document.querySelector('.item');

// Simulate user-provided description
const desc = `Cute pup<h1>LOVE THIS GUY</h1>`;

const myHTML = `
  <div class="image-wrapper">
    <h2>A Dynamic Image</h2>
    <img src="https://picsum.photos/200" alt="A random image"/>
    <p>${desc}</p>
  </div>
`;

item.innerHTML = myHTML;

console.log(item.innerHTML);