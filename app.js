// Get the task form, input field, and task list
const taskForm = document.getElementById('taskForm');
const inputTaskName = document.getElementById('taskName');
const taskList = document.getElementById('taskList');

// Get the task list from local storage or create an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to add a task to the list and update local storage
function addTask(taskName) {
  tasks.push(taskName);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render the task list
function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach(taskName => {
    const li = document.createElement('li');
    li.textContent = taskName;
    taskList.appendChild(li);
  });
}

// Add an event listener to the task form
taskForm.addEventListener('submit', event => {
  event.preventDefault();
  const taskName = inputTaskName.value;
  addTask(taskName);
  renderTaskList();
  inputTaskName.value = '';
});

// Render the task list on page load
renderTaskList();




// Retrieve the value of the taskName input
let taskNameInput = document.getElementById('taskName');
let taskNameValue = taskNameInput.value;

// Add the value to local storage
// localStorage.setItem('taskName', taskNameValue);

// let taskNameValue = localStorage.getItem('taskName');
