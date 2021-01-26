// UI Variables
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");

//Load all Event Listeners
loadEventListeners();

//All Events
function loadEventListeners() {
  form.addEventListener('submit', createTask);
  taskList.addEventListener('click', deleteTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
};

//Create Task
function createTask(e) {
  if(taskInput.value === '') {
    alert("You need to insert Task To DO.")
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement("a");
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = '';
  }
  e.preventDefault();
}

// Delete Task
function deleteTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

//Clear All Tasks
function clearTasks(e) {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  e.preventDefault();
}

//Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.textContent.toLowerCase();
    if(item.indexOf(text) !== -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none';
    }
  })
}