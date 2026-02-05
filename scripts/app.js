console.log("E-Commerce Website Loaded");
console.log("E-Commerce Website Loaded");

// Select hamburger menu and navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

// Toggle navigation menu on hamburger click
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
