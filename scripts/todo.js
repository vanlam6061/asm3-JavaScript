"use strict";
// Get a list from local storage
const KEY_TODO = "TO-DO";
const todoArr = JSON.parse(getFromStorage(KEY_TODO)) || [];
const KEY_LOGIN = "USER-LOGIN";
const loginUser = JSON.parse(getFromStorage(KEY_LOGIN)) || [];
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

function parseUser(todoData) {
  const todo = new Todo(todoData.task, todoData.owner, todoData.isDone);
  return todo;
}
const renderData = function () {
  let html = "";
  todoArr.map((todo) => {
    html += `
    <li>${todo.task}<span class="close" onclick="deleteTask('${todo.task}','${todo.owner}')">×</span></li>`;
  });
  todoContainer.innerHTML = html;
  todoTask.innerHTML = "";
};
console.log(loginUser);

// Check login and render list
const checklogin = function () {
  if (loginUser != []) {
    renderData();
  } else {
    alert("Please login to get todo List");
    window.location.href = "../pages/login.html";
  }
};

checklogin();
// Trigger the add button and CREATE a new Todo Instance

addBtn.addEventListener("click", () => {
  const todoData = {
    task: todoTask.value,
    owner: loginUser[0].userName,
    isDone: true,
  };
  let validate = true;
  if (!todoData.task) {
    alert("Please fill tasks");
    validate = false;
  }
  if (validate) {
    const newTodo = parseUser(todoData);
    todoArr.push(newTodo);
    saveToStorage(KEY_TODO, JSON.stringify(todoArr));
    renderData();
    clearInput();
  }
});
function clearInput() {
  todoTask.value = "";
}
console.log(todoArr);
console.log(loginUser);
//delete todo tasks
const deleteTask = function (task, owner) {
  const checkConfirm = confirm("Are you sure about that?");
  for (let i = 0; i < todoArr.length; i++) {
    if (todoArr[i].task == task && loginUser[0].userName == owner) {
      if (checkConfirm) {
        todoArr.splice(i, 1);
        saveToStorage(KEY_TODO, JSON.stringify(todoArr));
        renderData();
      }
    }
  }
};
// toggle todo
todoContainer.addEventListener("click", function (event) {
  for (let i = 0; i < todoArr.length; i++) {
    if (event.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      todoArr[i].isDone = false;
    }
  }
});
