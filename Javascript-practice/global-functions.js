const portfolioOwner = 'Fabian Melea';
let portfolioTheme = 'dark';
var projectCount = 5;

function showPortfolioInfo() {
  console.log(`Owner: ${portfolioOwner}, Theme: ${portfolioTheme}, Projects: ${projectCount}`);
}

showPortfolioInfo();

sayHi(); // works
function sayHi() {
  console.log('Hi from your portfolio!');
}

// sayHi(); // works
window.sayHi(); // also works
