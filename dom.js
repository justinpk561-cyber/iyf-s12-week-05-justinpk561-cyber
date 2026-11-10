
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


// Task 9.2: DOM Traversal

const taskList = document.getElementById("task-list");

// Parent element
console.log(taskList.parentElement);

// Child elements
console.log(taskList.children);

// First child
console.log(taskList.firstElementChild);

// Last child
console.log(taskList.lastElementChild);

// Next sibling
console.log(taskList.nextElementSibling);

// Previous sibling
console.log(taskList.previousElementSibling);

// Find a paragraph inside the article
console.log(document.querySelector("article p"));
