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
const renderData = function () {
  let html = "";
  todoArr.map((todo) => {
    html += `
    <li>${todo.task}<span class="close" onclick=deleteTask(${todo.task},${todo.owner})>×</span></li>`;
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
    let newTodo = new Todo(todoData.task, todoData.owner, todoData.isDone);
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
//delete todo tasks
const deleteTask = function () {
  todoArr.forEach((number, index) => console.log(`${index}:${number}`));
  // todoArr.forEach((arr, i) => {
  //   if (task == arr.task && owner == loginUser.userName) {
  //     const confirmDelete = confirm(
  //       " are you sure you want to delete this task !"
  //     );
  //     if (confirmDelete) {
  //       todoArr.splice(i, 1);
  //       saveToStorage(KEY_TODO, JSON.stringify(todoArr));
  //       renderData();
  //     // }
  //   }
  // });
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
