"use strict";

const KEY_LOGIN = "USER-LOGIN";
let userLogin = JSON.parse(getFromStorage(KEY_LOGIN)) || [];
const KEY = "USER_SETTING";
let settingArr = JSON.parse(getFromStorage(KEY)) || [];
const logOutBtn = document.getElementById("btn-logout");
logOutBtn.addEventListener("click", () => {
  userLogin = [];
  settingArr = [];
  saveToStorage(KEY_LOGIN, JSON.stringify(userLogin));
  localStorage.setItem(KEY_LOGIN, JSON.stringify(userLogin));
  saveToStorage(KEY, JSON.stringify(settingArr));
  localStorage.setItem(KEY, JSON.stringify(settingArr));
  alert("User logged out successful");
});
