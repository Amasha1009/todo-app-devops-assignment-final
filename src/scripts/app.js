// DOM Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const countSpan = document.getElementById("count");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearBtn = document.getElementById("clearCompleted");
const dateDisplay = document.getElementById("dateDisplay");

// State
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Initialize
function init() {
  renderDate();
  renderTasks();
}

function renderDate() {
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
}

// Logic to add a task
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveAndRender();
  taskInput.value = "";
}

// Logic to delete a task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveAndRender();
}

// Logic to toggle complete status
function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  saveAndRender();
}

// Clear completed tasks
function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  saveAndRender();
}

// Save to LocalStorage and update UI
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Render the list based on filters
function renderTasks() {
  taskList.innerHTML = "";

  // Filter logic
  const filteredTasks = tasks.filter(task => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  // Update Task Counter (Active tasks)
  const activeCount = tasks.filter(task => !task.completed).length;
  countSpan.textContent = activeCount;

  // Render HTML
  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${task.id})">
      <span>${escapeHtml(task.text)}</span>
      <button class="delete-btn" onclick="deleteTask(${task.id})">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    `;
    taskList.appendChild(li);
  });
}

// Helper for security (prevent XSS)
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Event Listeners
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

clearBtn.addEventListener("click", clearCompleted);

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    filterBtns.forEach(b => b.classList.remove("active"));
    // Add to clicked
    btn.classList.add("active");
    // Set filter
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Expose functions to global scope for HTML onclick attributes
window.deleteTask = deleteTask;
window.toggleTask = toggleTask;

// Run App
init();
