const toDoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const toDoList = document.getElementById('todo-list');

// Add a task
const addTask = () => {
  const taskText = toDoInput.value.trim();

  if (taskText !== '') {
    const taskItem = createTaskItem(taskText);
    toDoList.appendChild(taskItem);
    toDoInput.value = '';
  }
};

// Create new task items
const createTaskItem = (taskText) => {
  const taskItem = document.createElement('li');
  taskItem.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add = 'checkbox';

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteBtn);

  return taskItem;
};

// Delete tasks
const deleteTask = (event) => {
  const taskItem = event.target.parentNode;
  toDoList.removeChild(taskItem);
};

// Cross out tasks
const toggleTask = (event) => {
  const taskItem = event.target.parentNode;
  taskItem.classList.toggle('completed');
};

// Event listeners
addTaskButton.addEventListener('click', addTask);
toDoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }

});

toDoList.addEventListener('change', toggleTask);

// Examples of tasks
const initialTasks = [
  'Buy coffee',
  'Drink coffee',
  'Have a nap'
];

initialTasks.forEach((task) => {
  const taskItem = createTaskItem(task);
  toDoList.appendChild(taskItem);
});