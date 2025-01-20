"use strict";

const todoList = document.getElementById('todo-list');
const addBtn = document.getElementById('add-btn');
const newTaskInput = document.getElementById('new-task');

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.parentElement;
    li.remove(); 
  }
});

addBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim(); 

  if (taskText) {
    const newTask = document.createElement('li');
    newTask.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;
    
    todoList.appendChild(newTask);

    newTaskInput.value = '';
  } else {
    alert('Введіть текст завдання!');
  }
});

newTaskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addBtn.click(); 
  }
});