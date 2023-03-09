"use strict";

const KEY_LOGIN = "USER_LOGIN";
let userLogin = JSON.parse(getFromStorage(KEY_LOGIN)) || [];
const logOutBtn = document.getElementById("btn-logout");
logOutBtn.addEventListener("click", () => {
  userLogin = [];
});
