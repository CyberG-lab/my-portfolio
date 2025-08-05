// Selecting a div with the class 'skill-item'
//console.log("=== Specific Selectors ===");
//const skillSection = document.querySelector('div.skill-item');
//console.log('Skill Section:', skillSection);

// Selecting an image inside a 'project-item'
//const projectImage = document.querySelector('.project-item img');
//console.log('First Project Image:', projectImage);

// Selecting the specific project by its ID
//const betaProject = document.querySelector('#portfolio-project-beta');
//console.log('Beta Project:', betaProject);


// First, select a parent element, e.g., the 'skill-item' div
//console.log("=== Searching Within Elements ===");
//const skillContainer = document.querySelector('.skill-item');
//console.log('Skill Container:', skillContainer);

// Now, select an element *inside* the skillContainer
//const firstSkillListItem = skillContainer.querySelector('li');
//console.log('First Skill List Item:', firstSkillListItem);

// Select all list items within the skillContainer
//const allSkillListItems = skillContainer.querySelectorAll('li');
//console.log('All Skill List Items:', allSkillListItems); 




// First, select a parent element, e.g., the 'skill-item' div
console.log("=== Searching Within Elements ===");
const skillContainer = document.querySelector('.skill-item');
console.log('Skill Container:', skillContainer);

// Now, select an element *inside* the skillContainer
const firstSkillListItem = skillContainer.querySelector('li');
console.log('First Skill List Item:', firstSkillListItem);

// Select all list items within the skillContainer
const allSkillListItems = skillContainer.querySelectorAll('li');
console.log('All Skill List Items:', allSkillListItems);