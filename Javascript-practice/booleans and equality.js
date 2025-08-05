let isFeatured = true;
let hasProfile = false;

const projectStars = 42;
const isPopular = projectStars > 50; // false
console.log(isPopular); // Output: false

let age = 30; // assignment
console.log(age == 30);  // true (loose equality)
console.log(age === 30); // true (strict equality)

console.log(10 == '10');   // true (number and string, but values are equal)
console.log(10 === '10');  // false (number vs. string)

let featuredCount = 5;
let featuredCountString = '5';
console.log(featuredCount == featuredCountString);  // true
console.log(featuredCount === featuredCountString); // false