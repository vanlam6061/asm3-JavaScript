"use strict";
// touch DOM element
const addBtn = document.getElementById("btn-add");
const inputTask = document.getElementById("input-task");
const deleteBtn = document.getElementById("btn-delete");
const dodoItem = document.getElementById("toggle-dodo");

// create todo class

class Todo {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}

// Get a list from local storage
const KEY_TODO = "TODO";
const todoArr = JSON.parse(getFromStorage(KEY_TODO)) || [];
const loginUser = JSON.parse(getFromStorage(KEY_LOGIN_USER)) || [];

// Trigger the add button and CREATE a new Todo Instance

addBtn.addEventListener("click", () => {
  const todoData = {
    task: inputTask.value,
    owner: data.username,
    isDone: true,
  };
  let validate = true;
  if (!todoData.task) {
    alert("Please fill tasks");
    validate = false;
  }
  if (validate) {
    let addTodo = new Todo(todoData.task, todoData.isDone);
    const data = parseUsers(user);
    userArr.push(data);
    saveToStorage(KEY, JSON.stringify(userArr));
    window.location.href = "../pages/login.html";
  }
});
