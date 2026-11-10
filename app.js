
// To-Do List Application

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");
const clearCompletedButton = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll("[data-filter]");

let tasks = [];
let currentFilter = "all";

// Display tasks
function renderTasks() {
    todoList.textContent = "";

    const filteredTasks = tasks.filter(function(task) {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    filteredTasks.forEach(function(task) {
        const li = document.createElement("li");
        li.className = "todo-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Mark task as complete");

        checkbox.addEventListener("change", function() {
            task.completed = checkbox.checked;
            renderTasks();
        });

        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });
            renderTasks();
        });

        li.append(checkbox, span, deleteButton);
        todoList.appendChild(li);
    });

    const remaining = tasks.filter(function(task) {
        return !task.completed;
    }).length;

    taskCount.textContent = remaining + " tasks remaining";
}

// Add a new task
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = todoInput.value.trim();

    if (text === "") return;

    tasks.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    todoInput.value = "";
    renderTasks();
});

// Filter tasks
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
        renderTasks();
    });
});

// Clear completed tasks
clearCompletedButton.addEventListener("click", function() {
    tasks = tasks.filter(function(task) {
        return !task.completed;
    });

    renderTasks();
});

// Initial display
renderTasks();
                              
