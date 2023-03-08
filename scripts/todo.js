"use strict";
// touch DOM element
const addBtn = document.getElementById("btn-add");
const todoTask = document.getElementById("input-task");
const deleteBtn = document.getElementById("btn-delete");
const dodoItem = document.getElementById("toggle-dodo");
const todoContainer = document.getElementById("todo-list");

// create todo class

class Todo {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}

// Get a list from local storage
const KEY_TODO = "TO_DO";
const todoArr = JSON.parse(getFromStorage(KEY_TODO)) || [];
const keyLoginUser = "USER_LOGIN";
const loginUser = JSON.parse(getFromStorage(keyLoginUser)) || [];

// Trigger the add button and CREATE a new Todo Instance

addBtn.addEventListener("click", () => {
  const todoData = {
    task: todoTask.value,
    owner: loginUser.username,
    isDone: true,
  };
  let validate = true;
  if (!todoData.task) {
    alert("Please fill tasks");
    validate = false;
  }
  if (validate) {
    let newTodo = new Todo(todoData.task, todoData.owner, todoData.isDone);
    todoArr.push(newTodo);
    saveToStorage(KEY_TODO, JSON.stringify(todoArr));
    renderData();
  }
});
function clearInput() {
  taskInput.value = "";
}

const renderData = function () {
  let html = "";
  todoArr.map((todo) => {
    html += `
    <li>${todo.task}<span class="close" onclick=deleteTask(${todo.task},${todo.owner})>×</span></li>`;
  });
  todoContainer.innerHTML = html;
  todoTask.innerHTML = "";
};
//delete todo tasks
const deleteTask = function (task, owner) {
  todoArr.forEach((arr, i) => {
    if (task == arr.task && owner == arr.owner) {
      const confirmDelete = confirm(
        " are you sure you want to delete this task !"
      );
      if (confirmDelete) {
        todoArr.splice(i, 1);
        saveToStorage(KEY_TODO, JSON.stringify(todoArr));
        renderData();
      }
    }
  });
};

// function parseUser(todoData) {
//   const user = new Todo(
//     todoData.firstName,
//     todoData.lastName,
//     todoData.userName,
//     todoData.password
//   );

//   return user;
// }
