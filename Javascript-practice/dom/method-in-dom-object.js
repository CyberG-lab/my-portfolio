// Selecting the first h2 element
//console.log("=== Inspecting Elements ===");
//const firstHeading = document.querySelector('h2');

//console.log('Using console.log():', firstHeading);
//console.dir('Using console.dir():', firstHeading);


// Accessing Element Properties
console.log("=== Element Properties ===");
const projectTitle = document.querySelector('.project-item h2');
console.log('Project Title Element:', projectTitle);

// Get the parent element
const projectContainer = projectTitle.parentElement;
console.log('Parent Container of Project Title:', projectContainer);

// Get and log text content
console.log('Project Title Text:', projectTitle.textContent);

// Get and log inner HTML
console.log('Project Title Inner HTML:', projectTitle.innerHTML);

// Get and log outer HTML
console.log('Project Title Outer HTML:', projectTitle.outerHTML);

// Get and log classes
console.log('Project Container Classes:', projectContainer.classList);