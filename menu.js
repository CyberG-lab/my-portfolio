
const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("menu-wrapper");
const menuClose = document.getElementById("menu-close");
const menuLinks = document.querySelectorAll(".menu-link");
const header = document.querySelector(".header-container");

function toggleMobileMenu(element) {
  element.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("display-none");
    header.classList.toggle("display-none");
    header.classList.toggle("position-fixed");
    document.body.classList.toggle("no-scroll");

    e.preventDefault();
  });
}

toggleMobileMenu(hamburgerMenu);
toggleMobileMenu(menuClose);

menuLinks.forEach((link) => {
  toggleMobileMenu(link);
});

// // Get the DOM elements
// const hamburgerOpen = document.getElementById('hamburger-menu');
// const hamburgerClose = document.getElementById('hamburger-close');
// const mobileMenu = document.getElementById('menu-wrapper');
// const menuLinks = document.querySelectorAll('.menu-link a');
// const body = document.body;

// // Function to open the mobile menu
// function openMobileMenu() {
//     mobileMenu.classList.add('active');
//     body.classList.add('no-scroll');
// }

// // Function to close the mobile menu
// function closeMobileMenu() {
//     mobileMenu.classList.remove('active');
//     body.classList.remove('no-scroll');
// }

// // Attach event listeners to open and close the menu
// if (hamburgerOpen) {
//     hamburgerOpen.addEventListener('click', (e) => {
//         e.preventDefault();
//         openMobileMenu();
//     });
// }

// if (hamburgerClose) {
//     hamburgerClose.addEventListener('click', (e) => {
//         e.preventDefault();
//         closeMobileMenu();
//     });
// }

// // Close menu and scroll to section when a link is clicked
// menuLinks.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         closeMobileMenu();
//         const targetId = link.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//             targetElement.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });