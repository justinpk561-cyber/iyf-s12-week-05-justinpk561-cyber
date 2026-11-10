
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


// Task 10.1: Click Counter

let count = 0;

const counterContainer = document.createElement("div");

const countDisplay = document.createElement("h2");
countDisplay.textContent = "Count: 0";

const increaseButton = document.createElement("button");
increaseButton.textContent = "Increase";

const decreaseButton = document.createElement("button");
decreaseButton.textContent = "Decrease";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

counterContainer.append(
    countDisplay,
    increaseButton,
    decreaseButton,
    resetButton
);

document.body.appendChild(counterContainer);

// Increase count
increaseButton.addEventListener("click", function() {
    count++;
    countDisplay.textContent = "Count: " + count;
});

// Decrease count
decreaseButton.addEventListener("click", function() {
    if (count > 0) {
        count--;
    }
    countDisplay.textContent = "Count: " + count;
});

// Reset count
resetButton.addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = "Count: " + count;
});


// Task 10.2: Keyboard Shortcuts

const sampleForm = document.getElementById("sample-form");

// Listen for keyboard events
document.addEventListener("keydown", function(event) {

    // Ctrl + S: Save
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    // Escape: Clear form inputs
    if (event.key === "Escape") {
        sampleForm.reset();
    }

    // Ctrl + Enter: Submit form
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        sampleForm.requestSubmit();
    }

    // Display keyboard event information
    console.log("Key pressed:", event.key);
    console.log("Event type:", event.type);
});


// Task 10.3: Event Delegation

// Add delete buttons to existing tasks
taskList.querySelectorAll("li").forEach(function(item) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    item.appendChild(deleteButton);
});

// One event listener handles all task clicks
taskList.addEventListener("click", function(event) {
    const clickedItem = event.target.closest("li");

    if (!clickedItem) return;

    // Delete task
    if (event.target.tagName === "BUTTON") {
        clickedItem.remove();
        return;
    }

    // Toggle completed status
    clickedItem.classList.toggle("completed");

    if (clickedItem.classList.contains("completed")) {
        clickedItem.style.textDecoration = "line-through";
    } else {
        clickedItem.style.textDecoration = "none";
    }
});

// Add new tasks
const addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add New Task";
document.body.appendChild(addTaskButton);

addTaskButton.addEventListener("click", function() {
    const taskName = prompt("Enter a new task:");

    if (taskName && taskName.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskName;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
    }
});


// Task 10.4: Form Validation

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.placeholder = "Enter your email";

sampleForm.insertBefore(emailInput, sampleForm.querySelector("button"));

const message = document.createElement("p");
sampleForm.appendChild(message);

function showError(input, errorMessage) {
    input.style.border = "2px solid red";
    message.textContent = errorMessage;
    message.style.color = "red";
}

function clearError(input) {
    input.style.border = "";
    message.textContent = "";
}

function showSuccess() {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
}

sampleForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("username");
    const email = document.getElementById("email");

    clearError(name);
    clearError(email);

    if (name.value.trim().length < 2) {
        showError(name, "Name must be at least 2 characters.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Please enter a valid email.");
        return;
    }

    const formData = new FormData(sampleForm);
    console.log(Object.fromEntries(formData));

    showSuccess();
    sampleForm.reset();
});

