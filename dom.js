
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


// Task 9.3: Modifying DOM Elements

// Change text content
title.textContent = "My DOM Manipulation Practice";

// Change HTML content
const article = document.querySelector("article");
article.innerHTML = "<h2>Learning DOM</h2><p>JavaScript makes websites interactive!</p>";

// Change an attribute
firstLink.setAttribute("title", "Go to Home");

// Read an attribute
console.log(firstLink.getAttribute("href"));

// Change a data attribute
taskList.dataset.status = "active";
console.log(taskList.dataset.status);

// Change styles
title.style.color = "blue";
title.style.fontSize = "30px";


// Task 9.4: Creating and Removing Elements

// Create a new paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "I created this paragraph using JavaScript!";

// Add it to the page
document.querySelector("main").appendChild(newParagraph);

// Create a new navigation link
function addNavItem(text, href) {
    const link = document.createElement("a");
    link.textContent = text;
    link.href = href;

    document.querySelector("nav").appendChild(link);
}

// Add a new navigation item
addNavItem("Contact", "#contact");

// Remove the last task
const lastTask = taskList.lastElementChild;
lastTask.remove();

// Clone the title
const titleCopy = title.cloneNode(true);
document.querySelector("main").appendChild(titleCopy);
