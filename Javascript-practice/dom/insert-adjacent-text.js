// Getters and Setters
console.log("=== Getters and Setters ===");

// Select the main heading
const mainHeading = document.querySelector('h1');

// Using textContent as a getter (reading the value)
console.log('Original Main Heading Text:', mainHeading.textContent);

// Using textContent as a setter (updating the value)
mainHeading.textContent = 'My Dynamic Portfolio!';

// Log the updated value to confirm
console.log('Updated Main Heading Text:', mainHeading.textContent);