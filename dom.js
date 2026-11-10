
// Task 9.1: Selecting DOM Elements

// Select an element by its ID
const title = document.getElementById("main-title");
console.log(title);

// Select elements by their class name
const descriptions = document.getElementsByClassName("description");
console.log(descriptions);

// Select elements by their tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Select the first matching element
const firstLink = document.querySelector("nav a");
console.log(firstLink);

// Select all matching elements
const allLinks = document.querySelectorAll("nav a");
console.log(allLinks);
