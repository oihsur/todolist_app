const form = document.querySelector("#task-form");
const list = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const input = document.querySelector("#task");


// Load all EventListeners
loadEventListeners(); 


function loadEventListeners(){

  // Load all EventListeners
  form.addEventListener("submit", addTask);
  list.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearAll); 
  filter.addEventListener("keyup", filterTasks);

};

// Add Task
function addTask(e) {
  if (input.value === '') {
    alert("You need to add a task");
  }

  // Create item
  const li = document.createElement("li");
  li.className = "collection-item";
  
  //Move input inside li 
  li.appendChild(document.createTextNode(input.value));
  
  //Create deleting button
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append delete button to task
  li.appendChild(link);

  //Append task to list of tasks
  list.appendChild(li);

  //Clear value
  input.value = '';
  
  e.preventDefault();
}

// Remove Task 

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm("Are you sure?")){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear All Tasks

function clearAll(e) {

  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
}

// Filter Tasks

function filterTasks(e) {

  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {

    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
    
  });
}