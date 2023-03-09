"use strict";
//get dar
const KEY_USER = "USER-ARRAY";
const userArr = JSON.parse(getFromStorage(KEY_USER)) || [];
const KEY_LOGIN = "USER_LOGIN";
let userLogin = JSON.parse(getFromStorage(KEY_LOGIN)) || [];

//DOM objects
const loginUsername = document.getElementById("input-username");
const loginPassword = document.getElementById("input-password");
const loginBtn = document.getElementById("btn-submit");

loginBtn.addEventListener("click", () => {
  userLogin = [];
  const loginData = {
    userName: loginUsername.value,
    password: loginPassword.value,
  };
  let loginValidate = true;
  if (!loginData.userName || !loginData.password) {
    alert("Please fill all fields");
    loginValidate = false;
  } else {
    for (let i = 0; i < userArr.length; i++) {
      if (
        loginData.userName != userArr[i].userName ||
        loginData.password != userArr[i].password
      ) {
        alert("Username or password is not corrected");
        loginValidate = false;
      } else {
        alert("Logged in successful !");

        userLogin.push(userArr[i]);
        saveToStorage(KEY_LOGIN, JSON.stringify(userLogin));
        window.location.href = "../pages/news.html";
      }
    }
  }
});
