"use strict";
// Get a list from local storage
const KEY_TODO = "TO-DO";
const todoArr = JSON.parse(getFromStorage(KEY_TODO)) || [];
const KEY_LOGIN = "USER-LOGIN";
const loginUser = JSON.parse(getFromStorage(KEY_LOGIN)) || [];
localStorage.setItem(KEY_LOGIN, JSON.stringify(loginUser));
// touch DOM element
const addBtn = document.getElementById("btn-add");
const todoTask = document.getElementById("input-task");
const deleteBtn = document.getElementById("btn-delete");
const dodoItem = document.getElementById("toggle-dodo");
const todoContainer = document.getElementById("todo-list");

const renderData = function () {
  let html = "";
  todoArr.map((todo, index) => {
    html += `
    <li  data-index ="${index}">${todo.task}<span class="close" onclick="deleteTask('${todo.task}','${todo.owner}')">×</span></li>`;
  });
  todoContainer.innerHTML = html;
  todoTask.innerHTML = "";
};
console.log(loginUser);

const checkLogin = function () {
  if (loginUser.length == 0) {
    alert("Please login to get todo List");
    window.location.href = "../pages/login.html";
  } else {
    renderData();
  }
};
checkLogin();
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

// Trigger the add button and CREATE a new Todo Instance

addBtn.addEventListener("click", () => {
  let validate = true;
  const todoData = {
    task: todoTask.value,
    owner: loginUser[0].userName,
    isDone: true,
  };
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

// toggle todo list

todoContainer.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    let checked = ev.target.classList.toggle("checked");
    const check = ev.target.classList.value;

    let isDone = check === "" ? true : false;
    console.log(check);
    console.log(isDone);

    let i = ev.target.dataset.index;
    console.log(i);
    todoArr[i].isDone = isDone;
    saveToStorage(KEY_TODO, JSON.stringify(todoArr));
    localStorage.setItem(KEY_TODO, JSON.stringify(todoArr));
  }
});
