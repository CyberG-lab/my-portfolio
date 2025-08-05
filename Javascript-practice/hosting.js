// Calling the function before it's defined
console.log(formatProjectTitle("Portfolio Hoisting"));

function formatProjectTitle(title) {
  return `Project: ${title}`;
}


// Trying to call the function expression before it's defined
console.log(formatSection("About Hoisting"));

const formatSection = function(sectionName) {
  return `Section: ${sectionName}`;
};